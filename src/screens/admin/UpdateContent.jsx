import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X, Upload } from 'lucide-react';
import { getAllEvents, createEvent, updateEvent, deleteEvent } from '../../api/admin-api';
import { getAllFAQs, createFAQ, updateFAQ, deleteFAQ } from '../../api/admin-api';
import { getAllOverviews, createOverview, updateOverview, deleteOverview } from '../../api/admin-api';

const UpdateContent = () => {
  // State for Events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for FAQ
  const [faqs, setFaqs] = useState([]);
  const [faqLoading, setFaqLoading] = useState(true);
  const [faqError, setFaqError] = useState(null);

  // State for Overview
  const [overviews, setOverviews] = useState([]);
  const [overviewLoading, setOverviewLoading] = useState(true);
  const [overviewError, setOverviewError] = useState(null);

  // Fetch events, FAQs and Overviews on component mount
  useEffect(() => {
    fetchEvents();
    fetchFAQs();
    fetchOverviews();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await getAllEvents();
      setEvents(response.data || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFAQs = async () => {
    try {
      setFaqLoading(true);
      const response = await getAllFAQs();
      setFaqs(response || []);
      setFaqError(null);
    } catch (err) {
      setFaqError('Failed to fetch FAQs');
      console.error('Error fetching FAQs:', err);
    } finally {
      setFaqLoading(false);
    }
  };

  const fetchOverviews = async () => {
    try {
      setOverviewLoading(true);
      const response = await getAllOverviews();
      setOverviews(response.data || []);
      setOverviewError(null);
    } catch (err) {
      setOverviewError('Failed to fetch overviews');
      console.error('Error fetching overviews:', err);
    } finally {
      setOverviewLoading(false);
    }
  };

  // State for Logo
  const [logo, setLogo] = useState({ id: 1, image: '' });

  // State for Products
  const [products, setProducts] = useState([
    { id: 1, title: 'Premium Software', text: 'Best in class solution', image: '', url: 'https://example.com' },
    { id: 2, title: 'Mobile App', text: 'Available on all platforms', image: '', url: 'https://app.example.com' }
  ]);

  // UI State
  const [activeCard, setActiveCard] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [previewMode, setPreviewMode] = useState({});

  // Generic CRUD handlers
  const handleAdd = (type) => {
    const newItem = {
      _id: Date.now(),
      ...(type === 'events' && { text: '', image: '', type: 'event' }),
      ...(type === 'faqs' && { question: '', answer: '' }),
      ...(type === 'overviews' && { text: '', description: '', image: '' }),
      ...(type === 'products' && { title: '', text: '', image: '', url: '' })
    };
    
    setEditingItem({ type, item: newItem });
  };

  const handleEdit = (type, item) => {
    setEditingItem({ type, item: { ...item } });
  };

  const handleSave = async () => {
    const { type, item } = editingItem;
    
    try {
      if (type === 'event') {
        if (!events.find(e => e._id === item._id)) {
          const response = await createEvent(item);
          setEvents([...events, response.data]);
        } else {
          const response = await updateEvent(item._id, item);
          setEvents(events.map(e => e._id === item._id ? response.data : e));
        }
      } else if (type === 'faqs') {
        const faqData = {
          question: item.question,
          answer: item.answer
        };
        
        if (!faqs.find(f => f._id === item._id)) {
          // Create new FAQ
          const response = await createFAQ(faqData);
          setFaqs([...faqs, response]);
        } else {
          // Update existing FAQ
          const response = await updateFAQ(item._id, faqData);
          setFaqs(faqs.map(f => f._id === item._id ? response : f));
        }
      } else if (type === 'products') {
        if (!products.find(p => p._id === item._id)) {
          setProducts([...products, item]);
        } else {
          setProducts(products.map(p => p._id === item._id ? item : p));
        }
      } else if (type === 'logo') {
        setLogo(item);
      } else if (type === 'overviews') {
        const overviewData = {
          text: item.text,
          description: item.description,
          image: item.image || ''
        };
        
        if (!overviews.find(o => o._id === item._id)) {
          // Create new overview
          const response = await createOverview(overviewData);
          setOverviews([...overviews, response]);
        } else {
          // Update existing overview
          const response = await updateOverview(item._id, overviewData);
          setOverviews(overviews.map(o => o._id === item._id ? response : o));
        }
      }
      
      setEditingItem(null);
    } catch (err) {
      console.error('Error saving item:', err);
      setError('Failed to save changes');
    }
  };

  const handleDelete = async (type, id) => {
    try {
      if (type === 'event') {
        await deleteEvent(id);
        setEvents(events.filter(e => e._id !== id));
      } else if (type === 'faqs') {
        await deleteFAQ(id);
        setFaqs(faqs.filter(f => f._id !== id));
      } else if (type === 'products') {
        setProducts(products.filter(p => p.id !== id));
      } else if (type === 'logo') {
        setLogo({ id: 1, image: '' });
      } else if (type === 'overviews') {
        await deleteOverview(id);
        setOverviews(overviews.filter(o => o._id !== id));
      }
    } catch (err) {
      console.error('Error deleting item:', err);
      setError('Failed to delete item');
    }
  };

  const handleImageUpload = (field, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (editingItem) {
        setEditingItem({
          ...editingItem,
          item: {
            ...editingItem.item,
            [field]: e.target.result
          }
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const togglePreview = (type, id) => {
    setPreviewMode({
      ...previewMode,
      [`${type}-${id}`]: !previewMode[`${type}-${id}`]
    });
  };

  // Card Component
  const Card = ({ title, children, type }) => (
    <div className="bg-gray-900 border border-purple-500 rounded-lg p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button
          onClick={() => handleAdd(type)}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>
      {children}
    </div>
  );

  // Item Display Component
  const ItemDisplay = ({ item, type, onEdit, onDelete, onPreview }) => (
    <div className="bg-black border border-gray-700 rounded-lg p-4 mb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={onPreview}
            className="text-purple-400 hover:text-purple-300"
          >
            {previewMode[`${type}-${item._id}`] ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="text-blue-400 hover:text-blue-300 p-1"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={onDelete}
            className="text-red-400 hover:text-red-300 p-1"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      {!previewMode[`${type}-${item._id}`] ? (
        <div className="text-white space-y-1">
          {type === 'overviews' && (
            <>
              <p className="font-medium"><span className="text-purple-400">Text:</span> {item.text}</p>
              <p className="text-gray-300"><span className="text-purple-400">Description:</span> {item.description}</p>
              {item.imageUrl && (
                <div className="mt-2">
                  <img src={item.imageUrl} alt="Overview" className="max-w-32 max-h-32 object-cover rounded" />
                </div>
              )}
            </>
          )}
          {type === 'events' && (
            <>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  item.type === 'event' ? 'bg-green-600' : 
                  item.type === 'upcoming' ? 'bg-yellow-600' : 'bg-blue-600'
                }`}>
                  {item.type}
                </span>
              </div>
              <p className="font-medium">{item.text}</p>
              {item.image && (
                <img src={item.image} alt="Event" className="mt-2 max-w-32 max-h-32 object-cover rounded" />
              )}
            </>
          )}
          {type === 'faqs' && (
            <>
              <p><span className="text-purple-400">Q:</span> {item.question}</p>
              <p><span className="text-purple-400">A:</span> {item.answer}</p>
            </>
          )}
          {type === 'products' && (
            <>
              <p><span className="text-purple-400">Title:</span> {item.title}</p>
              <p><span className="text-purple-400">Text:</span> {item.text}</p>
              <p><span className="text-purple-400">URL:</span> {item.url}</p>
              {item.image && <p><span className="text-purple-400">Image:</span> Uploaded</p>}
            </>
          )}
        </div>
      ) : (
        <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
          <h4 className="text-purple-400 font-semibold mb-2">Preview:</h4>
          {type === 'overviews' && (
            <div className="text-white">
              <h3 className="font-bold text-lg mb-2">{item.text}</h3>
              <p className="text-gray-300 mb-2">{item.description}</p>
              {item.imageUrl && (
                <img src={item.imageUrl} alt="Overview" className="mb-2 max-w-32 max-h-32 object-cover rounded" />
              )}
            </div>
          )}
          {type === 'events' && (
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  item.type === 'event' ? 'bg-green-600' : 
                  item.type === 'upcoming' ? 'bg-yellow-600' : 'bg-blue-600'
                }`}>
                  {item.type}
                </span>
              </div>
              <p className="font-medium">{item.text}</p>
              {item.image && (
                <img src={item.image} alt="Event" className="mt-2 max-w-32 max-h-32 object-cover rounded" />
              )}
            </div>
          )}
          {type === 'faqs' && (
            <div className="text-white">
              <p className="font-semibold mb-1">Q: {item.question}</p>
              <p className="text-gray-300">A: {item.answer}</p>
            </div>
          )}
          {type === 'products' && (
            <div className="text-white">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-300 mb-2">{item.text}</p>
              {item.image && (
                <img src={item.image} alt="Product" className="mb-2 max-w-32 max-h-32 object-cover rounded" />
              )}
              <a href={item.url} className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Edit Modal
  const EditModal = () => {
    if (!editingItem) return null;
    
    const { type, item } = editingItem;
    const [formData, setFormData] = useState({ ...item });
    const [error, setError] = useState('');
    
    const handleInputChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleImageUpload = (field, file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          [field]: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    };

    const validateOverviewData = () => {
      if (!formData.text) {
        setError('Text is required');
        return false;
      }
      if (!formData.description) {
        setError('Description is required');
        return false;
      }
      return true;
    };

    const handleSave = async () => {
      try {
        if (type === 'overviews') {
          if (!validateOverviewData()) {
            return;
          }

          const overviewData = {
            text: formData.text,
            description: formData.description,
            image: formData.image || ''
          };
          
          if (!overviews.find(o => o._id === formData._id)) {
            const response = await createOverview(overviewData);
            setOverviews([...overviews, response.data]);
          } else {
            const response = await updateOverview(formData._id, overviewData);
            setOverviews(overviews.map(o => o._id === formData._id ? response.data : o));
          }
        } else if (type === 'events') {
          if (!events.find(e => e._id === formData._id)) {
            const response = await createEvent(formData);
            setEvents([...events, response.data]);
          } else {
            const response = await updateEvent(formData._id, formData);
            setEvents(events.map(e => e._id === formData._id ? response.data : e));
          }
        } else if (type === 'faqs') {
          const faqData = {
            question: formData.question,
            answer: formData.answer
          };
          
          if (!faqs.find(f => f._id === formData._id)) {
            const response = await createFAQ(faqData);
            setFaqs([...faqs, response]);
          } else {
            const response = await updateFAQ(formData._id, faqData);
            setFaqs(faqs.map(f => f._id === formData._id ? response : f));
          }
        } else if (type === 'products') {
          if (!products.find(p => p._id === formData._id)) {
            setProducts([...products, formData]);
          } else {
            setProducts(products.map(p => p._id === formData._id ? formData : p));
          }
        } else if (type === 'logo') {
          setLogo(formData);
        }
        
        setEditingItem(null);
      } catch (err) {
        console.error('Error saving item:', err);
        setError('Failed to save changes');
      }
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 border border-purple-500 rounded-lg p-6 w-full max-w-md mx-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">
              {formData._id === Date.now() || !events.concat(faqs, products, overviews).find(i => i._id === formData._id) ? 'Add' : 'Edit'} {type.slice(0, -1)}
            </h3>
            <button
              onClick={() => setEditingItem(null)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            {type === 'overviews' && (
              <>
                <div>
                  <label className="block text-purple-400 mb-1">Text *</label>
                  <input
                    type="text"
                    value={formData.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                    placeholder="Enter overview text"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                    rows="4"
                    placeholder="Enter overview description"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Image</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload('image', e.target.files[0])}
                      className="hidden"
                      id="overview-image"
                    />
                    <label
                      htmlFor="overview-image"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded cursor-pointer flex items-center space-x-1"
                    >
                      <Upload size={16} />
                      <span>Upload</span>
                    </label>
                    {formData.image && <span className="text-green-400 text-sm">Image uploaded</span>}
                  </div>
                  {formData.image && (
                    <img src={formData.image} alt="Preview" className="mt-2 max-w-32 max-h-32 object-cover rounded" />
                  )}
                </div>
              </>
            )}
            {type === 'events' && (
              <>
                <div>
                  <label className="block text-purple-400 mb-1">Text *</label>
                  <input
                    type="text"
                    value={formData.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                    placeholder="Enter event text"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Type *</label>
                  <select
                    value={formData.type}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                  >
                    <option value="">Select type</option>
                    <option value="event">Event</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="gallery">Gallery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Image</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload('image', e.target.files[0])}
                      className="hidden"
                      id="event-image"
                    />
                    <label
                      htmlFor="event-image"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded cursor-pointer flex items-center space-x-1"
                    >
                      <Upload size={16} />
                      <span>Upload</span>
                    </label>
                    {formData.image && <span className="text-green-400 text-sm">Image uploaded</span>}
                  </div>
                  {formData.image && (
                    <img src={formData.image} alt="Preview" className="mt-2 max-w-32 max-h-32 object-cover rounded" />
                  )}
                </div>
              </>
            )}
            
            {type === 'faqs' && (
              <>
                <div>
                  <label className="block text-purple-400 mb-1">Question</label>
                  <textarea
                    value={formData.question}
                    onChange={(e) => handleInputChange('question', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                    rows="2"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Answer</label>
                  <textarea
                    value={formData.answer}
                    onChange={(e) => handleInputChange('answer', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                    rows="3"
                  />
                </div>
              </>
            )}
            
            {type === 'logo' && (
              <div>
                <label className="block text-purple-400 mb-1">Logo Image (Base64)</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload('image', e.target.files[0])}
                    className="hidden"
                    id="logo-image"
                  />
                  <label
                    htmlFor="logo-image"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded cursor-pointer flex items-center space-x-1"
                  >
                    <Upload size={16} />
                    <span>Upload Logo</span>
                  </label>
                  {formData.image && <span className="text-green-400 text-sm">Logo uploaded</span>}
                </div>
                {formData.image && (
                  <img src={formData.image} alt="Logo Preview" className="mt-2 max-w-24 max-h-24 object-contain" />
                )}
              </div>
            )}
            
            {type === 'products' && (
              <>
                <div>
                  <label className="block text-purple-400 mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Text</label>
                  <textarea
                    value={formData.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                    rows="2"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">URL</label>
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) => handleInputChange('url', e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-purple-400 mb-1">Image</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload('image', e.target.files[0])}
                      className="hidden"
                      id="product-image"
                    />
                    <label
                      htmlFor="product-image"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded cursor-pointer flex items-center space-x-1"
                    >
                      <Upload size={16} />
                      <span>Upload</span>
                    </label>
                    {formData.image && <span className="text-green-400 text-sm">Image uploaded</span>}
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center space-x-1"
            >
              <Save size={16} />
              <span>Save</span>
            </button>
            <button
              onClick={() => setEditingItem(null)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Landing Page Content Manager
        </h1>
        
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Overview Card */}
          <Card title="Overview Management" type="overviews">
            {overviewLoading ? (
              <div className="text-center text-white py-4">Loading overviews...</div>
            ) : overviewError ? (
              <div className="text-center text-red-500 py-4">{overviewError}</div>
            ) : (
              <div className="max-h-96 overflow-y-auto">
                {overviews.map(overview => (
                  <ItemDisplay
                    key={overview._id}
                    item={overview}
                    type="overviews"
                    onEdit={() => handleEdit('overviews', overview)}
                    onDelete={() => handleDelete('overviews', overview._id)}
                    onPreview={() => togglePreview('overviews', overview._id)}
                  />
                ))}
              </div>
            )}
          </Card>

          {/* Events Card */}
          <Card title="Events Management" type="events">
            {loading ? (
              <div className="text-center text-white py-4">Loading events...</div>
            ) : (
              <div className="max-h-96 overflow-y-auto">
                {events.map(event => (
                  <ItemDisplay
                    key={event._id}
                    item={event}
                    type="events"
                    onEdit={() => handleEdit('events', event)}
                    onDelete={() => handleDelete('events', event._id)}
                    onPreview={() => togglePreview('events', event._id)}
                  />
                ))}
              </div>
            )}
          </Card>

          {/* FAQ Card */}
          <Card title="FAQ Management" type="faqs">
            {faqLoading ? (
              <div className="text-center text-white py-4">Loading FAQs...</div>
            ) : faqError ? (
              <div className="text-center text-red-500 py-4">{faqError}</div>
            ) : (
              <div className="max-h-96 overflow-y-auto">
                {faqs.map(faq => (
                  <ItemDisplay
                    key={faq._id}
                    item={faq}
                    type="faqs"
                    onEdit={() => handleEdit('faqs', faq)}
                    onDelete={() => handleDelete('faqs', faq._id)}
                    onPreview={() => togglePreview('faqs', faq._id)}
                  />
                ))}
              </div>
            )}
          </Card>

          {/* Logo Card */}
          <Card title="Logo Management" type="logo">
            <div className="bg-black border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Current Logo</span>
                <button
                  onClick={() => handleEdit('logo', logo)}
                  className="text-blue-400 hover:text-blue-300 p-1"
                >
                  <Edit2 size={16} />
                </button>
              </div>
              {logo.image ? (
                <div className="text-center">
                  <img src={logo.image} alt="Current Logo" className="max-w-32 max-h-32 object-contain mx-auto mb-2" />
                  <p className="text-green-400 text-sm">Logo uploaded (Base64)</p>
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">No logo uploaded</p>
              )}
            </div>
          </Card>

          {/* Products Card */}
          <Card title="Products Management" type="products">
            <div className="max-h-96 overflow-y-auto">
              {products.map(product => (
                <ItemDisplay
                  key={product.id}
                  item={product}
                  type="products"
                  onEdit={() => handleEdit('products', product)}
                  onDelete={() => handleDelete('products', product.id)}
                  onPreview={() => togglePreview('products', product.id)}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>

      <EditModal />
    </div>
  );
};

export default UpdateContent;
import React, { useState } from 'react';
import './index.css'

const UserAvatar = () => (
  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14 12 16 10 16 8C16 6 14 4 12 4C10 4 8 6 8 8C8 10 10 12 12 12Z" stroke="#666" strokeWidth="1.5" />
      <path d="M18 20C18 16.5 15.5 14 12 14C8.5 14 6 16.5 6 20" stroke="#666" strokeWidth="1.5" />
    </svg>
  </div>
);

const Section = ({ title, children }) => (
  <div className="w-full max-w-xl">
    <div className="text-left text-md font-medium m-4">{title}</div>
    {children}
  </div>
);

const UserCard = ({ initialState = 'closed' }) => {
  const [state, setState] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const mockUser = {
    name: 'John Doe',
    age: '19 Years',
    gender: 'Rather not say',
    country: 'India',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante orci, congue in libero ut, euismod consequat felis.'
  };

  const toggleCard = () => {
    setIsOpen(!isOpen);
    setState(isOpen ? 'closed' : 'open');
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="px-4 py-3 flex items-center gap-3">
        <UserAvatar />
        <span className="text-base text-gray-900">{mockUser.name}</span>


        <button
          className="p-1 ml-auto hover:bg-gray-100 rounded-sm transition-colors"
          onClick={toggleCard}
        >
          <div
            className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'
              }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M8 10l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      {(isOpen || state === 'edit') && (
        <div className="px-4 pb-4">
          <div className="grid grid-cols-3 gap-8 mb-6">
            {/* Age Field */}
            <div>
              <div className="text-sm text-gray-500 mb-1">Age</div>
              {state === 'edit' ? (
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  defaultValue={mockUser.age}
                />
              ) : (
                <div className="text-sm text-gray-900">{mockUser.age}</div>
              )}
            </div>

            {/* Gender Field */}
            <div>
              <div className="text-sm text-gray-500 mb-1">Gender</div>
              {state === 'edit' ? (
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white appearance-none">
                  <option>{mockUser.gender}</option>
                </select>
              ) : (
                <div className="text-sm text-gray-900">{mockUser.gender}</div>
              )}
            </div>

            {/* Country Field */}
            <div>
              <div className="text-sm text-gray-500 mb-1">Country</div>
              {state === 'edit' ? (
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  defaultValue={mockUser.country}
                />
              ) : (
                <div className="text-sm text-gray-900">{mockUser.country}</div>
              )}
            </div>
          </div>

          {/* Description Field */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-1">Description</div>
            {state === 'edit' ? (
              <textarea
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm min-h-[120px] resize-none"
                defaultValue={mockUser.description}
              />
            ) : (
              <p className="text-sm text-gray-600 leading-relaxed">{mockUser.description}</p>
            )}
          </div>

          {/* Action Buttons */}

          {state === 'edit' ? (
            <div className="flex justify-end gap-2">
              <button
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                onClick={() => setState('open')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <button
                className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors"
                onClick={() => setState('open')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex justify-end gap-2">
              <button
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                onClick={() => setState('delete')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
              <button
                className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                onClick={() => setState('edit')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const DeleteDialog = ({ onClose, onConfirm }) => (
  <div className="w-full max-w-xl bg-white rounded-3xl shadow-sm border border-gray-100 p-4">
    <div className="flex justify-between items-center mb-6">
      <span className="text-gray-900">Are you sure you want to delete?</span>
      <button
        className="text-gray-400 hover:text-gray-500 transition-colors"
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="flex justify-end gap-3">
      <button
        className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        onClick={onClose}
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
        onClick={onConfirm}
      >
        Delete
      </button>
    </div>
  </div>
);

const ListView = () => {
  const [searchText, setSearchText] = useState('');
  const mockUser = {
    name: 'John Doe'
  };

  return (
    <div className="w-full max-w-xl space-y-3">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search user"
          className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-3xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>

      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <UserAvatar />
            <span className="text-base text-gray-900">{mockUser.name}</span>
            <div className="w-1.5 h-1.5 border-r-[1.5px] border-b-[1.5px] border-gray-400 transform rotate-45 ml-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-2xl font-medium mb-12">FactWise Assessment Visual Reference</h1>

      <Section title="Closed State">
        <UserCard initialState="closed" />
      </Section>

      <Section title="Open State">
        <UserCard initialState="open" />
      </Section>

      <Section title="Edit State">
        <UserCard initialState="edit" />
      </Section>

      <Section title="Delete Dialog">
        <DeleteDialog
          onClose={() => console.log('closed')}
          onConfirm={() => console.log('deleted')}
        />
      </Section>

      <Section title="List View">
        <ListView />
      </Section>
    </div>
  );
};

export default App;
import React from 'react';
import { navigationLinks } from '../../data/mockData';
import * as LucideIcons from 'lucide-react';

const Sidebar: React.FC = () => {
  // Dynamic icon component selection
  const IconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons] || LucideIcons.Circle;
    return <Icon size={20} />;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex md:flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">
          <span className="text-blue-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>
      <div className="px-4 py-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 pl-2">
          General
        </p>
        <nav className="space-y-1">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href="#"
              className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium ${
                link.active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={`mr-3 ${link.active ? 'text-blue-500' : 'text-gray-500'}`}>
                {IconComponent(link.icon)}
              </span>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="px-4 py-2 mt-6">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 pl-2">
          Tools
        </p>
        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <span className="mr-3 text-gray-500">
              <LucideIcons.MessageSquare size={20} />
            </span>
            Chat
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <span className="mr-3 text-gray-500">
              <LucideIcons.LifeBuoy size={20} />
            </span>
            Support
          </a>
          
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
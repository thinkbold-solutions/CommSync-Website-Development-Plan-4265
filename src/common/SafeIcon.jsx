import React from 'react';
import * as LucideIcons from 'lucide-react';
import { AlertTriangle } from 'lucide-react';

const SafeIcon = ({ icon, name, ...props }) => {
  let IconComponent;

  try {
    // If icon is passed directly (Lucide component)
    if (icon && typeof icon === 'function') {
      IconComponent = icon;
    }
    // If name is passed, try to find it in Lucide icons
    else if (name && LucideIcons[name]) {
      IconComponent = LucideIcons[name];
    }
    // Fallback to AlertTriangle
    else {
      IconComponent = AlertTriangle;
    }
  } catch (e) {
    IconComponent = AlertTriangle;
  }

  return IconComponent ? React.createElement(IconComponent, props) : <AlertTriangle {...props} />;
};

export default SafeIcon;
import React, { createContext, useContext, useState, ReactNode } from 'react';
import './Tabs.css';

// Theme interface
interface Theme {
    primary: string;
    secondary: string;
    text: string;
    background: string;
}

// Default theme
const defaultTheme: Theme = {
    primary: '#8BC34A',
    secondary: '#4CAF50',
    text: '#333333',
    background: '#FFFFFF'
};

// Context
const TabsContext = createContext<{
    activeTab: string;
    setActiveTab: (id: string) => void;
    theme: Theme;
}>({
    activeTab: '',
    setActiveTab: () => { },
    theme: defaultTheme
});

interface TabsProps {
    children: ReactNode;
    defaultTab: string;
    theme?: Theme;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultTab, theme = defaultTheme }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, theme }}>
            <div className="kiwi-tabs" style={{ '--primary': theme.primary, '--secondary': theme.secondary, '--text': theme.text, '--background': theme.background } as React.CSSProperties}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export const TabList: React.FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="kiwi-tab-list" role="tablist">{children}</div>;
};

interface TabProps {
    children: ReactNode;
    id: string;
}

export const Tab: React.FC<TabProps> = ({ children, id }) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const isActive = activeTab === id;

    return (
        <button
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            className={`kiwi-tab ${isActive ? 'kiwi-tab-active' : ''}`}
            onClick={() => setActiveTab(id)}
        >
            {children}
            {isActive && <span className="kiwi-tab-active-indicator" />}
        </button>
    );
};

export const TabPanel: React.FC<TabProps> = ({ children, id }) => {
    const { activeTab } = useContext(TabsContext);
    const isActive = activeTab === id;

    return (
        <div
            role="tabpanel"
            id={`panel-${id}`}
            aria-labelledby={`tab-${id}`}
            hidden={!isActive}
            className={`kiwi-tab-panel ${isActive ? 'kiwi-tab-panel-active' : ''}`}
        >
            {children}
        </div>
    );
};

export default Tabs;
"use client"

import React, { useState } from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    Button
} from '../../../../components';
import { FiArrowRight } from "react-icons/fi";

interface ButtonVariant {
    label: string;
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'kiwi';
}

const ButtonShowcase: React.FC = () => {
    const [activeSize, setActiveSize] = useState<'small' | 'medium' | 'large'>('medium');

    const buttonVariants: ButtonVariant[] = [
        { label: 'Primary', variant: 'primary' },
        { label: 'Secondary', variant: 'secondary' },
        { label: 'Success', variant: 'success' },
        { label: 'Danger', variant: 'danger' },
        { label: 'Kiwi', variant: 'kiwi' },
    ];

    const codeSnippet = `
import { Button } from './components';

export default function Home() {
  return (
    <div>
      <Button label="Submit" variant="primary" size="${activeSize}" />
      <Button label="Submit" variant="secondary" size="${activeSize}" />
      <Button label="Submit" variant="success" size="${activeSize}" />
      <Button label="Submit" variant="danger" size="${activeSize}" />
      <Button label="Submit" variant="kiwi" size="${activeSize}" />
    </div>
  );
}
`;

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-[#F1F8E9] rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#33691E]">Kiwi-themed Buttons</h2>
            <Tabs
                defaultTab="preview"
                theme={{
                    primary: '#8BC34A',
                    secondary: '#222222',
                    text: '#222222',
                    background: '#FFFFFF'
                }}>
                <TabList>
                    <Tab id="preview">Preview</Tab>
                    <Tab id="html">HTML</Tab>
                    <Tab id="jsx">JSX</Tab>
                </TabList>

                <TabPanel id="preview">
                    <div className="mb-4 bg-white p-4 pb-2 rounded-lg">
                        <label htmlFor="size-select" className="text-[#4CAF50] mr-2 font-semibold">Size:</label>
                        <select
                            id="size-select"
                            value={activeSize}
                            onChange={(e) => setActiveSize(e.target.value as 'small' | 'medium' | 'large')}
                            className="bg-[#F1F8E9] text-[#33691E] p-2 rounded border border-[#8BC34A] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                        >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className="divide-y-8 divide-gray-400">
                        <h6>
                            <span className="text-[#33691E]">Default</span>
                        </h6>
                    </div>
                    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg">
                        {buttonVariants.map((btn, index) => (
                            <Button
                                key={index}
                                label={btn.label}
                                variant={btn.variant}
                                size={activeSize}
                                aria-label={`${btn.label} button`}
                            />
                        ))}
                    </div>
                    <div className="divide-y-8 divide-gray-400">
                        <h6>
                            <span className="text-[#33691E]">Icon</span>
                        </h6>
                    </div>
                    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg">
                        {buttonVariants.map((btn, index) => (
                            <Button
                                key={index}
                                label={btn.label}
                                variant={btn.variant}
                                size={activeSize}
                                aria-label={`${btn.label} button`}
                                icon={<FiArrowRight />}
                            />
                        ))}
                    </div>
                    <div className="divide-y-8 divide-gray-400">
                        <h6>
                            <span className="text-[#33691E]">Loading</span>
                        </h6>
                    </div>
                    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg">
                        {buttonVariants.map((btn, index) => (
                            <Button
                                key={index}
                                label={btn.label}
                                variant={btn.variant}
                                size={activeSize}
                                aria-label={`${btn.label} button`}
                                loading
                            />
                        ))}
                    </div>
                    <div className="divide-y-8 divide-gray-400">
                        <h6>
                            <span className="text-[#33691E]">Animation</span>
                        </h6>
                    </div>
                    <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg">
                        {buttonVariants.map((btn, index) => (
                            <Button
                                key={index}
                                label={btn.label}
                                variant={btn.variant}
                                size={activeSize}
                                aria-label={`${btn.label} button`}
                                animation={index === 0 ? 'spin' : index === 1 ? 'bounce' : index === 2 ? 'shake' : 'none'}
                            />
                        ))}
                    </div>
                </TabPanel>

                <TabPanel id="html">
                    <pre className="text-sm text-[#33691E] overflow-x-auto p-4 bg-white rounded-lg border border-[#8BC34A]">
                        {`<button class="btn btn-primary btn-${activeSize}">Primary</button>
<button class="btn btn-secondary btn-${activeSize}">Secondary</button>
<button class="btn btn-success btn-${activeSize}">Success</button>
<button class="btn btn-danger btn-${activeSize}">Danger</button>
<button class="btn btn-kiwi btn-${activeSize}">Kiwi</button>`}
                    </pre>
                </TabPanel>

                <TabPanel id="jsx">
                    <pre className="text-sm text-[#33691E] overflow-x-auto p-4 bg-white rounded-lg border border-[#8BC34A]">
                        {codeSnippet}
                    </pre>
                </TabPanel>
            </Tabs>



            <div className="mt-6 text-[#33691E] bg-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p>
                    This showcase demonstrates our kiwi-themed button styles using the custom Button component.
                    Each button can be customized with different variants and sizes to fit your design needs.
                    Use the size selector above to see how the buttons look in different sizes.
                </p>
            </div>
        </div>
    );
};

export default ButtonShowcase;
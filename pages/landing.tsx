
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import React from 'react';


const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card/>
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">

      <div className="grid grid-cols-2 gap-4">
        {/* Small Buttons */}
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md bg-blue-500 text-white" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full bg-blue-500 text-white" />
        <Button title="Small Rounded-lg" styles="text-sm rounded-lg bg-blue-500 text-white" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm bg-green-500 text-white" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500 text-white" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full bg-green-500 text-white" />
        <Button title="Medium Rounded-lg" styles="text-base rounded-lg bg-green-500 text-white" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" styles="text-lg rounded-sm bg-purple-500 text-white" />
        <Button title="Large Rounded-md" styles="text-lg rounded-md bg-purple-500 text-white" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full bg-purple-500 text-white" />
        <Button title="Large Rounded-lg" styles="text-lg rounded-lg bg-purple-500 text-white" />

        {/* Extra LG Buttons */}
        <Button title="lg Rounded-sm" styles="text-xl rounded-sm bg-red-500 text-white" />
        <Button title="lg Rounded-md" styles="text-xl rounded-md bg-red-500 text-white" />
        <Button title="lg Rounded-full" styles="text-xl rounded-full bg-red-500 text-white" />
        <Button title="lg Rounded-lg" styles="text-xl rounded-lg bg-red-500 text-white" />
      </div>
    </div>
    </div>
    
  );
};

export default Landing;
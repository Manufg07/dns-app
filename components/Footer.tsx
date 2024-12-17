import React from 'react'

const Footer = () => {
    return (
    <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto">
            <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
            <div className="mt-2">
            <a
                href="/terms-and-conditions"
                className="text-blue-400 hover:underline mx-2"
            >
                Terms & Conditions
            </a>
            <a
                href="/privacy-policy"
                className="text-blue-400 hover:underline mx-2"
            >
                Privacy Policy
            </a>
            </div>
        </div>
    </footer>
    )
};

export default Footer
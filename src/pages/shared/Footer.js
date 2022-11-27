import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-600 py-2'>
            <footer className="footer px-10 py-4  text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Reselling</Link>
                    <Link className="link link-hover">Advertisement</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover"></Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <p className='text-white text-center italic'>All Copyrights @MobileBazar.com</p>
        </div>
    );
};

export default Footer;
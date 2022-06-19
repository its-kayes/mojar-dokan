import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div className='items-center'>
                    <img width="100" height="50" src="mojar_dokan.png" alt="" />
                    <p><span className='text-lg font-bold font-mono'>Mojar Dokan</span> <br />A supper shop where are all product available</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">About Us</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
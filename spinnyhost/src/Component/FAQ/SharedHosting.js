


import React from 'react'
import './SharedHosting.css'

function SharedHosting() {
    return (
        <div className='Shared-Hosting-Status'>
            <div>
                <div className='Shared-Hosting-Status-header'>
                    <span>Shared Hosting</span>
                </div>
                <hr />
                <div className='Shared-Hosting-Status-footer'>
                    <span> What is Shared Hosting?</span>
                    <p>Shared hosting is a type of web hosting service
                        where multiple websites are hosted on a single
                        physical server and share its resources, such as
                        CPU, RAM, storage, and bandwidth. This is an
                        entry-level hosting option that is cost-effective
                        and suitable for individuals, small businesses, and
                        websites with moderate traffic and resource needs.</p>
                    <p> shared hosting offers an affordable and convenient solution
                        for individuals and small businesses to get their websites
                        online. It's a great option for those who are just starting
                        out and don't expect high traffic or complex technical
                        requirements. However, as your website grows and resource
                        needs increase, you might eventually consider upgrading
                        to more advanced hosting solutions like VPS or dedicated
                        hosting.</p>
                </div>
                <div className='Shared-Hosting-Status-footer'>
                    <span>Does Shared Web Hosting include Email Hosting as well?</span>
                    <p>Yes, many shared web hosting plans include email hosting
                        as part of their package. Email hosting allows you to create
                        and manage email accounts associated with your domain name.
                        This means that you can have professional-looking email
                        addresses (e.g., yourname@yourdomain.com) that match your
                        website's domain.</p>
                    <p>It's worth noting that while shared hosting often includes
                        email hosting, the features and capabilities might vary
                        from one hosting provider to another. Some providers might
                        offer more advanced email features as part of their plans,
                        while others might offer basic email functionality.
                        If email is a critical aspect of your online presence,
                        consider reviewing the email features and limitations
                        of the shared hosting plan before making a decision. </p>
                </div>
                <div className='Shared-Hosting-Status-footer'>
                    <span>Is an upgrade possible from my current Linux Shared Hosting Plan?</span>
                    <p>Yes, most hosting providers offer the option to upgrade your
                        current Linux Shared Hosting plan as your needs grow or change.
                        Upgrading your hosting plan allows you to access more resources,
                        features, and capabilities to better accommodate your website's
                        requirements. </p>
                </div>
                <div className='Shared-Hosting-Status-footer'>
                    <span>Is there any money back guarantee with the Linux Web Hosting services?</span>
                    <p>Many hosting providers offer a money-back guarantee for their
                        Linux web hosting services as a way to instill confidence in
                        their customers and provide a risk-free trial period.
                        The specifics of the money-back guarantee can vary from
                        one provider to another, so it's important to carefully
                        review the terms and conditions before signing up</p>
                </div>
            </div>

        </div>
    )
}

export default SharedHosting

import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chris D&apos;Roberson</h2>
        <p>
          <a href="mailto:cdrobey@frcache.com">cdrobey@frcache.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Chris. I am the Americas&apos; Solution Engineering Senior Director at{' '}
        <a href="https://hashicorp.com">Hashicorp</a> and responsible for an incredible team of 100 SEs.
        Previously, I was Senior Director of Product Management at <a href="https://puppet.com">Puppet</a> leading
        the Infrastructure Automation Product Line.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Chris Roberson <Link to="/">frcache.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;

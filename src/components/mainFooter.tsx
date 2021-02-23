import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { outer, inner } from '../styles/shared';
import config from '../website-config';

export const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]} className="mainSiteFooter">
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          {config.footer && <>{config.footer}</>} &copy; {new Date().getFullYear()}{' '}
        </section>
        <SiteFooterNav>
          <Link to="/blog">Latest Posts</Link>
          {config.github && (
            <a href={config.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {config.linkedin && (
            <a href={config.twitter} target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          )}
          <Link to="/contact">Contact</Link>
        </SiteFooterNav>
      </div>
    </footer>
  );
};

const SiteFooter = css`
  position: relative;
  padding-top: 20px;
  padding-bottom: 25px;
  color: #000;
  background: #fff;
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.3rem;
  a {
    color: rgba(0, 0, 0, 0.7);
  }
  a:hover {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`;

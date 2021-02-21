import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/mainFooter';
import SiteNav from '../components/main_header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/mainShared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }
`;
const page_name = 'About';
const page_desc =
  "Hey! I am Sashank Neupane. I'm fascinated by Computer Science, Mathematics, and Physics. I want to explore how and why things work the way they do. This website was created to help me do exactly that. By penning down my thoughts, experiences, and point of view on various technical and non-technical areas, I wish to understand things better, explain them clearly, and ultimately be a better problem solver.";
const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>{`${page_name} | ${config.title}`}</title>
      <meta name="description" content={page_desc} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${page_name} | ${config.title}`} />
      <meta property="og:description" content={page_desc} />
      <meta property="og:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${page_name} | ${config.title}`} />
      <meta name="twitter:description" content={page_desc} />
      <meta name="twitter:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]} className="mainSiteNavMain">
          <div css={inner}>
            <SiteNav isAbout={true} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  <h5>A Personal Portfolio and Blogging Website</h5>
                </p>
                <p>
                  Hey! I am Sashank Neupane. I am fascinated by Computer Science, Mathematics, and
                  Entrepreneurship. I love exploring and travelling. This website is created to help me put forth
                  my ideas and experience to the entire world.
                </p>
                <p>Enjoy my blogs!</p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

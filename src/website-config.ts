export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  blogLogo: string;

  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  github?: string;
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  instagram?: string;
  email?: string;
  linkedin?: string;

  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  themeColor?: string;
  blogTitle?: string;
  mainDescription?: string;
}

const config: WebsiteConfig = {
  title: 'Sashank Neupane',
  description: 'My thoughts, ideas, and experiences.',
  mainDescription:
    'My personal portfolio where I pen down all my thoughts, ideas, and experience.',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/logo.png',
  blogLogo: 'img/blog-logo.png',
  lang: 'en',
  themeColor: '#26A6ED',
  siteUrl: 'https://sashankneupane.com.np',
  blogTitle: 'Sashank Blogs',
  github: 'https://github.com/sashankneupane7',
  twitter: 'https://twitter.com/SashankNeupane1',
  instagram: 'https://www.instagram.com/neupanesashank',
  linkedin: 'https://www.linkedin.com/in/sashank-neupane-8b4330192/?originalSubdomain=np',
  facebook: 'https://www.facebook.com/sashank.neupane.5',
  email: 'sashankneupane7@gmail.com',
  showSubscribe: true,
  mailchimpName: 'Sashank Blogs',
  mailchimpEmailFieldName: 'email',
  mailchimpAction: 'https://feedburner.google.com/fb/a/mailverify?uri=sjbblogs',
  googleSiteVerification: 'GoogleCode',
  footer: 'Sashank Neupane',
};

export default config;

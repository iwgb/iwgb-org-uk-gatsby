/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly language: Maybe<Scalars['String']>;
  readonly intl: Maybe<SitePageContextIntl>;
  readonly jobTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly contentSlugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly jobType: Maybe<Scalars['String']>;
  readonly slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly hasPrevious: Maybe<Scalars['Boolean']>;
  readonly hasNext: Maybe<Scalars['Boolean']>;
  readonly page: Maybe<Scalars['Int']>;
  readonly pages: Maybe<Scalars['Int']>;
  readonly featuredSlug: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly recentStorySlugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly campaignSlugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly heroCtaSlugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly locales: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly header_img: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly timestamp: Maybe<Scalars['Date']>;
};

type SitePageContextIntl = {
  readonly language: Maybe<Scalars['String']>;
  readonly languages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly messages: Maybe<SitePageContextIntlMessages>;
  readonly routed: Maybe<Scalars['Boolean']>;
  readonly originalPath: Maybe<Scalars['String']>;
  readonly redirect: Maybe<Scalars['Boolean']>;
  readonly defaultLanguage: Maybe<Scalars['String']>;
};

type SitePageContextIntlMessages = {
  readonly _404_title: Maybe<Scalars['String']>;
  readonly _404_heading: Maybe<Scalars['String']>;
  readonly _404_body: Maybe<Scalars['String']>;
  readonly global_iwgbLogo: Maybe<Scalars['String']>;
  readonly global_description: Maybe<Scalars['String']>;
  readonly global_slogan: Maybe<Scalars['String']>;
  readonly nav_news: Maybe<Scalars['String']>;
  readonly nav_campaigns: Maybe<Scalars['String']>;
  readonly nav_branches: Maybe<Scalars['String']>;
  readonly nav_about: Maybe<Scalars['String']>;
  readonly nav_support: Maybe<Scalars['String']>;
  readonly nav_getInvolved: Maybe<Scalars['String']>;
  readonly nav_democracy: Maybe<Scalars['String']>;
  readonly nav_joinButtonAlt: Maybe<Scalars['String']>;
  readonly nav_general: Maybe<Scalars['String']>;
  readonly nav_forSupporters: Maybe<Scalars['String']>;
  readonly nav_forMembers: Maybe<Scalars['String']>;
  readonly nav_more: Maybe<Scalars['String']>;
  readonly nav_contact: Maybe<Scalars['String']>;
  readonly join_contact_title: Maybe<Scalars['String']>;
  readonly join_contact_body: Maybe<Scalars['String']>;
  readonly join_fees_title: Maybe<Scalars['String']>;
  readonly join_fees_body: Maybe<Scalars['String']>;
  readonly join_fees_link_href: Maybe<Scalars['String']>;
  readonly join_fees_link_text: Maybe<Scalars['String']>;
  readonly join_jobType_charityWorker_description: Maybe<Scalars['String']>;
  readonly join_jobType_charityWorker_name: Maybe<Scalars['String']>;
  readonly join_jobType_cleanerFacilities_description: Maybe<Scalars['String']>;
  readonly join_jobType_cleanerFacilities_name: Maybe<Scalars['String']>;
  readonly join_jobType_courier_description: Maybe<Scalars['String']>;
  readonly join_jobType_courier_name: Maybe<Scalars['String']>;
  readonly join_jobType_cycleInstructor_description: Maybe<Scalars['String']>;
  readonly join_jobType_cycleInstructor_name: Maybe<Scalars['String']>;
  readonly join_jobType_fosterCarer_description: Maybe<Scalars['String']>;
  readonly join_jobType_fosterCarer_name: Maybe<Scalars['String']>;
  readonly join_jobType_gameWorker_description: Maybe<Scalars['String']>;
  readonly join_jobType_gameWorker_name: Maybe<Scalars['String']>;
  readonly join_jobType_higherEducation_description: Maybe<Scalars['String']>;
  readonly join_jobType_higherEducation_name: Maybe<Scalars['String']>;
  readonly join_jobType_nanny_description: Maybe<Scalars['String']>;
  readonly join_jobType_nanny_name: Maybe<Scalars['String']>;
  readonly join_jobType_other_description: Maybe<Scalars['String']>;
  readonly join_jobType_other_name: Maybe<Scalars['String']>;
  readonly join_jobType_privateHireDriver_description: Maybe<Scalars['String']>;
  readonly join_jobType_privateHireDriver_name: Maybe<Scalars['String']>;
  readonly join_jobType_securityReceptionist_description: Maybe<Scalars['String']>;
  readonly join_jobType_securityReceptionist_name: Maybe<Scalars['String']>;
  readonly join_jobType_yoga_teacher_description: Maybe<Scalars['String']>;
  readonly join_jobType_yoga_teacher_name: Maybe<Scalars['String']>;
  readonly join_jobType_yogaTeacher_description: Maybe<Scalars['String']>;
  readonly join_jobType_yogaTeacher_name: Maybe<Scalars['String']>;
  readonly join_loading_title: Maybe<Scalars['String']>;
  readonly join_loading_body: Maybe<Scalars['String']>;
  readonly join_title: Maybe<Scalars['String']>;
  readonly home_go: Maybe<Scalars['String']>;
  readonly home_takeAction: Maybe<Scalars['String']>;
  readonly home_moreStories: Maybe<Scalars['String']>;
  readonly home_weAre_1: Maybe<Scalars['String']>;
  readonly home_weAre_2: Maybe<Scalars['String']>;
  readonly home_weAre_body: Maybe<Scalars['String']>;
  readonly home_donate: Maybe<Scalars['String']>;
  readonly home_join: Maybe<Scalars['String']>;
  readonly home_readMore: Maybe<Scalars['String']>;
  readonly home_benefits_0_title: Maybe<Scalars['String']>;
  readonly home_benefits_0_body: Maybe<Scalars['String']>;
  readonly home_benefits_0_cta_href: Maybe<Scalars['String']>;
  readonly home_benefits_0_cta_text: Maybe<Scalars['String']>;
  readonly home_benefits_1_title: Maybe<Scalars['String']>;
  readonly home_benefits_1_body: Maybe<Scalars['String']>;
  readonly home_benefits_1_cta_href: Maybe<Scalars['String']>;
  readonly home_benefits_1_cta_text: Maybe<Scalars['String']>;
  readonly home_benefits_2_title: Maybe<Scalars['String']>;
  readonly home_benefits_2_body: Maybe<Scalars['String']>;
  readonly home_benefits_2_cta_href: Maybe<Scalars['String']>;
  readonly home_benefits_2_cta_text: Maybe<Scalars['String']>;
  readonly home_benefits_image: Maybe<Scalars['String']>;
  readonly home_benefits_title: Maybe<Scalars['String']>;
  readonly home_contact_title: Maybe<Scalars['String']>;
  readonly home_contact_body: Maybe<Scalars['String']>;
  readonly home_contact_copy: Maybe<Scalars['String']>;
  readonly home_contact_form_href: Maybe<Scalars['String']>;
  readonly home_contact_form_text: Maybe<Scalars['String']>;
  readonly home_contact_form_linkText: Maybe<Scalars['String']>;
  readonly home_contact_phone_value: Maybe<Scalars['String']>;
  readonly home_contact_phone_openingHours: Maybe<Scalars['String']>;
  readonly home_contact_phone_action_href: Maybe<Scalars['String']>;
  readonly home_contact_phone_action_text: Maybe<Scalars['String']>;
  readonly home_contact_address_value: Maybe<Scalars['String']>;
  readonly home_contact_address_action_href: Maybe<Scalars['String']>;
  readonly home_contact_address_action_text: Maybe<Scalars['String']>;
  readonly footer_policies: Maybe<Scalars['String']>;
  readonly footer_about: Maybe<Scalars['String']>;
  readonly footer_getInvolved: Maybe<Scalars['String']>;
  readonly footer_social: Maybe<Scalars['String']>;
  readonly footer_handles_twitter: Maybe<Scalars['String']>;
  readonly footer_handles_facebook: Maybe<Scalars['String']>;
  readonly footer_handles_instagram: Maybe<Scalars['String']>;
  readonly footer_handles_youtube: Maybe<Scalars['String']>;
  readonly footer_copyright: Maybe<Scalars['String']>;
  readonly footer_credit: Maybe<Scalars['String']>;
  readonly footer_logIn: Maybe<Scalars['String']>;
  readonly footer_contribute: Maybe<Scalars['String']>;
  readonly post_donate_title: Maybe<Scalars['String']>;
  readonly post_donate_body: Maybe<Scalars['String']>;
  readonly post_donate_cta_href: Maybe<Scalars['String']>;
  readonly post_donate_cta_text: Maybe<Scalars['String']>;
  readonly branches_title: Maybe<Scalars['String']>;
  readonly branches_viewWebsite: Maybe<Scalars['String']>;
  readonly branches_readMore: Maybe<Scalars['String']>;
  readonly branches_charityWorkers_name: Maybe<Scalars['String']>;
  readonly branches_charityWorkers_description: Maybe<Scalars['String']>;
  readonly branches_cleanersAndFacilities_name: Maybe<Scalars['String']>;
  readonly branches_cleanersAndFacilities_description: Maybe<Scalars['String']>;
  readonly branches_couriersAndLogistics_description: Maybe<Scalars['String']>;
  readonly branches_couriersAndLogistics_name: Maybe<Scalars['String']>;
  readonly branches_cyclingInstructors_name: Maybe<Scalars['String']>;
  readonly branches_cyclingInstructors_description: Maybe<Scalars['String']>;
  readonly branches_fosterCareWorkers_name: Maybe<Scalars['String']>;
  readonly branches_fosterCareWorkers_description: Maybe<Scalars['String']>;
  readonly branches_gameWorkers_name: Maybe<Scalars['String']>;
  readonly branches_gameWorkers_description: Maybe<Scalars['String']>;
  readonly branches_generalMembers_description: Maybe<Scalars['String']>;
  readonly branches_generalMembers_name: Maybe<Scalars['String']>;
  readonly branches_securityAndReceptionists_name: Maybe<Scalars['String']>;
  readonly branches_securityAndReceptionists_description: Maybe<Scalars['String']>;
  readonly branches_unitedPrivateHireDrivers_description: Maybe<Scalars['String']>;
  readonly branches_unitedPrivateHireDrivers_name: Maybe<Scalars['String']>;
  readonly branches_universitiesOfLondon_name: Maybe<Scalars['String']>;
  readonly branches_universitiesOfLondon_description: Maybe<Scalars['String']>;
  readonly branches_yogaTeachers_name: Maybe<Scalars['String']>;
  readonly branches_yogaTeachers_description: Maybe<Scalars['String']>;
  readonly branches_nanniesAndAuPairs_name: Maybe<Scalars['String']>;
  readonly branches_nanniesAndAuPairs_description: Maybe<Scalars['String']>;
};

type GhostPost = Node & {
  readonly slug: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly uuid: Scalars['String'];
  readonly title: Scalars['String'];
  readonly html: Maybe<Scalars['String']>;
  readonly comment_id: Maybe<Scalars['String']>;
  readonly feature_image: Maybe<Scalars['String']>;
  readonly featured: Scalars['Boolean'];
  readonly visibility: Scalars['String'];
  readonly created_at: Scalars['Date'];
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly published_at: Maybe<Scalars['Date']>;
  readonly custom_excerpt: Maybe<Scalars['String']>;
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly codeinjection_styles: Maybe<Scalars['String']>;
  readonly custom_template: Maybe<Scalars['String']>;
  readonly canonical_url: Maybe<Scalars['String']>;
  readonly send_email_when_published: Maybe<Scalars['Boolean']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<GhostTag>>>;
  readonly authors: ReadonlyArray<Maybe<GhostAuthor>>;
  readonly primary_author: GhostAuthor;
  readonly primary_tag: Maybe<GhostTag>;
  readonly url: Scalars['String'];
  readonly excerpt: Maybe<Scalars['String']>;
  readonly reading_time: Maybe<Scalars['Int']>;
  readonly email_subject: Maybe<Scalars['String']>;
  readonly plaintext: Maybe<Scalars['String']>;
  readonly page: Maybe<Scalars['Boolean']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly email_recipient_filter: Maybe<Scalars['String']>;
  readonly access: Maybe<Scalars['Boolean']>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type GhostPost_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPost_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPost_published_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GhostPage = Node & {
  readonly slug: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly uuid: Scalars['String'];
  readonly title: Scalars['String'];
  readonly html: Maybe<Scalars['String']>;
  readonly comment_id: Maybe<Scalars['String']>;
  readonly feature_image: Maybe<Scalars['String']>;
  readonly featured: Scalars['Boolean'];
  readonly visibility: Scalars['String'];
  readonly created_at: Scalars['Date'];
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly published_at: Maybe<Scalars['Date']>;
  readonly custom_excerpt: Maybe<Scalars['String']>;
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly codeinjection_styles: Maybe<Scalars['String']>;
  readonly custom_template: Maybe<Scalars['String']>;
  readonly canonical_url: Maybe<Scalars['String']>;
  readonly send_email_when_published: Maybe<Scalars['Boolean']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<GhostTag>>>;
  readonly authors: ReadonlyArray<Maybe<GhostAuthor>>;
  readonly primary_author: GhostAuthor;
  readonly primary_tag: Maybe<GhostTag>;
  readonly url: Scalars['String'];
  readonly excerpt: Maybe<Scalars['String']>;
  readonly reading_time: Maybe<Scalars['Int']>;
  readonly email_subject: Maybe<Scalars['String']>;
  readonly plaintext: Maybe<Scalars['String']>;
  readonly page: Maybe<Scalars['Boolean']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly access: Maybe<Scalars['Boolean']>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type GhostPage_created_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPage_updated_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type GhostPage_published_atArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GhostTag = Node & {
  readonly slug: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly feature_image: Maybe<Scalars['String']>;
  readonly visibility: Scalars['String'];
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
  readonly count: Maybe<GhostPostCount>;
  readonly postCount: Maybe<Scalars['Int']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly canonical_url: Maybe<Scalars['String']>;
  readonly accent_color: Maybe<Scalars['String']>;
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GhostAuthor = Node & {
  readonly slug: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly profile_image: Maybe<Scalars['String']>;
  readonly cover_image: Maybe<Scalars['String']>;
  readonly bio: Maybe<Scalars['String']>;
  readonly website: Maybe<Scalars['String']>;
  readonly location: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
  readonly count: GhostPostCount;
  readonly postCount: Scalars['Int'];
  readonly ghostId: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GhostSettings = Node & {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly cover_image: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly lang: Scalars['String'];
  readonly timezone: Scalars['String'];
  readonly navigation: Maybe<ReadonlyArray<Maybe<GhostNavigation>>>;
  readonly secondary_navigation: Maybe<ReadonlyArray<Maybe<GhostNavigation>>>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly og_image: Maybe<Scalars['String']>;
  readonly og_title: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly twitter_image: Maybe<Scalars['String']>;
  readonly twitter_title: Maybe<Scalars['String']>;
  readonly twitter_description: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
  readonly codeinjection_head: Maybe<Scalars['String']>;
  readonly codeinjection_foot: Maybe<Scalars['String']>;
  readonly codeinjection_styles: Scalars['String'];
  readonly active_timezone: Maybe<Scalars['String']>;
  readonly default_locale: Maybe<Scalars['String']>;
  readonly members_support_address: Maybe<Scalars['String']>;
  readonly ghostId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type GhostNavigation = {
  readonly label: Scalars['String'];
  readonly url: Scalars['String'];
};

type GhostPostCount = {
  readonly posts: Maybe<Scalars['Int']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly apiUrl: Maybe<Scalars['String']>;
  readonly contentApiKey: Maybe<Scalars['String']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly mergeSecurityHeaders: Maybe<Scalars['Boolean']>;
  readonly headers: Maybe<SitePluginPluginOptionsHeaders>;
  readonly path: Maybe<Scalars['String']>;
  readonly languages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly defaultLanguage: Maybe<Scalars['String']>;
  readonly redirect: Maybe<Scalars['Boolean']>;
  readonly apiKey: Maybe<Scalars['String']>;
  readonly tables: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsTables>>>;
  readonly trackingUrl: Maybe<Scalars['String']>;
  readonly siteId: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsHeaders = {
  readonly _x: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsTables = {
  readonly baseId: Maybe<Scalars['String']>;
  readonly tableName: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Airtable = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly table: Maybe<Scalars['String']>;
  readonly recordId: Maybe<Scalars['String']>;
  readonly rowIndex: Maybe<Scalars['Int']>;
  readonly data: Maybe<AirtableData>;
};

type AirtableData = {
  readonly Slug: Maybe<Scalars['String']>;
  readonly Sort: Maybe<Scalars['Boolean']>;
  readonly Typeform_ID: Maybe<Scalars['String']>;
  readonly Image: Maybe<Scalars['String']>;
  readonly Instagram: Maybe<Scalars['String']>;
  readonly Facebook: Maybe<Scalars['String']>;
  readonly Link: Maybe<Scalars['String']>;
  readonly Twitter: Maybe<Scalars['String']>;
  readonly Name: Maybe<Scalars['String']>;
  readonly Plan: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly ghostPost: Maybe<GhostPost>;
  readonly allGhostPost: GhostPostConnection;
  readonly ghostPage: Maybe<GhostPage>;
  readonly allGhostPage: GhostPageConnection;
  readonly ghostTag: Maybe<GhostTag>;
  readonly allGhostTag: GhostTagConnection;
  readonly ghostAuthor: Maybe<GhostAuthor>;
  readonly allGhostAuthor: GhostAuthorConnection;
  readonly ghostSettings: Maybe<GhostSettings>;
  readonly allGhostSettings: GhostSettingsConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly airtable: Maybe<Airtable>;
  readonly allAirtable: AirtableConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostPostArgs = {
  slug: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  uuid: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  comment_id: Maybe<StringQueryOperatorInput>;
  feature_image: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  visibility: Maybe<StringQueryOperatorInput>;
  created_at: Maybe<DateQueryOperatorInput>;
  updated_at: Maybe<DateQueryOperatorInput>;
  published_at: Maybe<DateQueryOperatorInput>;
  custom_excerpt: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  codeinjection_styles: Maybe<StringQueryOperatorInput>;
  custom_template: Maybe<StringQueryOperatorInput>;
  canonical_url: Maybe<StringQueryOperatorInput>;
  send_email_when_published: Maybe<BooleanQueryOperatorInput>;
  tags: Maybe<GhostTagFilterListInput>;
  authors: Maybe<GhostAuthorFilterListInput>;
  primary_author: Maybe<GhostAuthorFilterInput>;
  primary_tag: Maybe<GhostTagFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  reading_time: Maybe<IntQueryOperatorInput>;
  email_subject: Maybe<StringQueryOperatorInput>;
  plaintext: Maybe<StringQueryOperatorInput>;
  page: Maybe<BooleanQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  email_recipient_filter: Maybe<StringQueryOperatorInput>;
  access: Maybe<BooleanQueryOperatorInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostPostArgs = {
  filter: Maybe<GhostPostFilterInput>;
  sort: Maybe<GhostPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostPageArgs = {
  slug: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  uuid: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  comment_id: Maybe<StringQueryOperatorInput>;
  feature_image: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  visibility: Maybe<StringQueryOperatorInput>;
  created_at: Maybe<DateQueryOperatorInput>;
  updated_at: Maybe<DateQueryOperatorInput>;
  published_at: Maybe<DateQueryOperatorInput>;
  custom_excerpt: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  codeinjection_styles: Maybe<StringQueryOperatorInput>;
  custom_template: Maybe<StringQueryOperatorInput>;
  canonical_url: Maybe<StringQueryOperatorInput>;
  send_email_when_published: Maybe<BooleanQueryOperatorInput>;
  tags: Maybe<GhostTagFilterListInput>;
  authors: Maybe<GhostAuthorFilterListInput>;
  primary_author: Maybe<GhostAuthorFilterInput>;
  primary_tag: Maybe<GhostTagFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  reading_time: Maybe<IntQueryOperatorInput>;
  email_subject: Maybe<StringQueryOperatorInput>;
  plaintext: Maybe<StringQueryOperatorInput>;
  page: Maybe<BooleanQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  access: Maybe<BooleanQueryOperatorInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostPageArgs = {
  filter: Maybe<GhostPageFilterInput>;
  sort: Maybe<GhostPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostTagArgs = {
  slug: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  feature_image: Maybe<StringQueryOperatorInput>;
  visibility: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  count: Maybe<GhostPostCountFilterInput>;
  postCount: Maybe<IntQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  canonical_url: Maybe<StringQueryOperatorInput>;
  accent_color: Maybe<StringQueryOperatorInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostTagArgs = {
  filter: Maybe<GhostTagFilterInput>;
  sort: Maybe<GhostTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostAuthorArgs = {
  slug: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  profile_image: Maybe<StringQueryOperatorInput>;
  cover_image: Maybe<StringQueryOperatorInput>;
  bio: Maybe<StringQueryOperatorInput>;
  website: Maybe<StringQueryOperatorInput>;
  location: Maybe<StringQueryOperatorInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  count: Maybe<GhostPostCountFilterInput>;
  postCount: Maybe<IntQueryOperatorInput>;
  ghostId: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostAuthorArgs = {
  filter: Maybe<GhostAuthorFilterInput>;
  sort: Maybe<GhostAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_ghostSettingsArgs = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  logo: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  cover_image: Maybe<StringQueryOperatorInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  timezone: Maybe<StringQueryOperatorInput>;
  navigation: Maybe<GhostNavigationFilterListInput>;
  secondary_navigation: Maybe<GhostNavigationFilterListInput>;
  meta_title: Maybe<StringQueryOperatorInput>;
  meta_description: Maybe<StringQueryOperatorInput>;
  og_image: Maybe<StringQueryOperatorInput>;
  og_title: Maybe<StringQueryOperatorInput>;
  og_description: Maybe<StringQueryOperatorInput>;
  twitter_image: Maybe<StringQueryOperatorInput>;
  twitter_title: Maybe<StringQueryOperatorInput>;
  twitter_description: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  codeinjection_head: Maybe<StringQueryOperatorInput>;
  codeinjection_foot: Maybe<StringQueryOperatorInput>;
  codeinjection_styles: Maybe<StringQueryOperatorInput>;
  active_timezone: Maybe<StringQueryOperatorInput>;
  default_locale: Maybe<StringQueryOperatorInput>;
  members_support_address: Maybe<StringQueryOperatorInput>;
  ghostId: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGhostSettingsArgs = {
  filter: Maybe<GhostSettingsFilterInput>;
  sort: Maybe<GhostSettingsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_airtableArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  table: Maybe<StringQueryOperatorInput>;
  recordId: Maybe<StringQueryOperatorInput>;
  rowIndex: Maybe<IntQueryOperatorInput>;
  data: Maybe<AirtableDataFilterInput>;
};


type Query_allAirtableArgs = {
  filter: Maybe<AirtableFilterInput>;
  sort: Maybe<AirtableSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly intl: Maybe<SitePageContextIntlFilterInput>;
  readonly jobTypes: Maybe<StringQueryOperatorInput>;
  readonly contentSlugs: Maybe<StringQueryOperatorInput>;
  readonly jobType: Maybe<StringQueryOperatorInput>;
  readonly slugs: Maybe<StringQueryOperatorInput>;
  readonly hasPrevious: Maybe<BooleanQueryOperatorInput>;
  readonly hasNext: Maybe<BooleanQueryOperatorInput>;
  readonly page: Maybe<IntQueryOperatorInput>;
  readonly pages: Maybe<IntQueryOperatorInput>;
  readonly featuredSlug: Maybe<StringQueryOperatorInput>;
  readonly recentStorySlugs: Maybe<StringQueryOperatorInput>;
  readonly campaignSlugs: Maybe<StringQueryOperatorInput>;
  readonly heroCtaSlugs: Maybe<StringQueryOperatorInput>;
  readonly locales: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly header_img: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly timestamp: Maybe<DateQueryOperatorInput>;
};

type SitePageContextIntlFilterInput = {
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly languages: Maybe<StringQueryOperatorInput>;
  readonly messages: Maybe<SitePageContextIntlMessagesFilterInput>;
  readonly routed: Maybe<BooleanQueryOperatorInput>;
  readonly originalPath: Maybe<StringQueryOperatorInput>;
  readonly redirect: Maybe<BooleanQueryOperatorInput>;
  readonly defaultLanguage: Maybe<StringQueryOperatorInput>;
};

type SitePageContextIntlMessagesFilterInput = {
  readonly _404_title: Maybe<StringQueryOperatorInput>;
  readonly _404_heading: Maybe<StringQueryOperatorInput>;
  readonly _404_body: Maybe<StringQueryOperatorInput>;
  readonly global_iwgbLogo: Maybe<StringQueryOperatorInput>;
  readonly global_description: Maybe<StringQueryOperatorInput>;
  readonly global_slogan: Maybe<StringQueryOperatorInput>;
  readonly nav_news: Maybe<StringQueryOperatorInput>;
  readonly nav_campaigns: Maybe<StringQueryOperatorInput>;
  readonly nav_branches: Maybe<StringQueryOperatorInput>;
  readonly nav_about: Maybe<StringQueryOperatorInput>;
  readonly nav_support: Maybe<StringQueryOperatorInput>;
  readonly nav_getInvolved: Maybe<StringQueryOperatorInput>;
  readonly nav_democracy: Maybe<StringQueryOperatorInput>;
  readonly nav_joinButtonAlt: Maybe<StringQueryOperatorInput>;
  readonly nav_general: Maybe<StringQueryOperatorInput>;
  readonly nav_forSupporters: Maybe<StringQueryOperatorInput>;
  readonly nav_forMembers: Maybe<StringQueryOperatorInput>;
  readonly nav_more: Maybe<StringQueryOperatorInput>;
  readonly nav_contact: Maybe<StringQueryOperatorInput>;
  readonly join_contact_title: Maybe<StringQueryOperatorInput>;
  readonly join_contact_body: Maybe<StringQueryOperatorInput>;
  readonly join_fees_title: Maybe<StringQueryOperatorInput>;
  readonly join_fees_body: Maybe<StringQueryOperatorInput>;
  readonly join_fees_link_href: Maybe<StringQueryOperatorInput>;
  readonly join_fees_link_text: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_charityWorker_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_charityWorker_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_cleanerFacilities_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_cleanerFacilities_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_courier_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_courier_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_cycleInstructor_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_cycleInstructor_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_fosterCarer_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_fosterCarer_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_gameWorker_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_gameWorker_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_higherEducation_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_higherEducation_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_nanny_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_nanny_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_other_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_other_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_privateHireDriver_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_privateHireDriver_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_securityReceptionist_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_securityReceptionist_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_yoga_teacher_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_yoga_teacher_name: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_yogaTeacher_description: Maybe<StringQueryOperatorInput>;
  readonly join_jobType_yogaTeacher_name: Maybe<StringQueryOperatorInput>;
  readonly join_loading_title: Maybe<StringQueryOperatorInput>;
  readonly join_loading_body: Maybe<StringQueryOperatorInput>;
  readonly join_title: Maybe<StringQueryOperatorInput>;
  readonly home_go: Maybe<StringQueryOperatorInput>;
  readonly home_takeAction: Maybe<StringQueryOperatorInput>;
  readonly home_moreStories: Maybe<StringQueryOperatorInput>;
  readonly home_weAre_1: Maybe<StringQueryOperatorInput>;
  readonly home_weAre_2: Maybe<StringQueryOperatorInput>;
  readonly home_weAre_body: Maybe<StringQueryOperatorInput>;
  readonly home_donate: Maybe<StringQueryOperatorInput>;
  readonly home_join: Maybe<StringQueryOperatorInput>;
  readonly home_readMore: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_0_title: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_0_body: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_0_cta_href: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_0_cta_text: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_1_title: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_1_body: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_1_cta_href: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_1_cta_text: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_2_title: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_2_body: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_2_cta_href: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_2_cta_text: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_image: Maybe<StringQueryOperatorInput>;
  readonly home_benefits_title: Maybe<StringQueryOperatorInput>;
  readonly home_contact_title: Maybe<StringQueryOperatorInput>;
  readonly home_contact_body: Maybe<StringQueryOperatorInput>;
  readonly home_contact_copy: Maybe<StringQueryOperatorInput>;
  readonly home_contact_form_href: Maybe<StringQueryOperatorInput>;
  readonly home_contact_form_text: Maybe<StringQueryOperatorInput>;
  readonly home_contact_form_linkText: Maybe<StringQueryOperatorInput>;
  readonly home_contact_phone_value: Maybe<StringQueryOperatorInput>;
  readonly home_contact_phone_openingHours: Maybe<StringQueryOperatorInput>;
  readonly home_contact_phone_action_href: Maybe<StringQueryOperatorInput>;
  readonly home_contact_phone_action_text: Maybe<StringQueryOperatorInput>;
  readonly home_contact_address_value: Maybe<StringQueryOperatorInput>;
  readonly home_contact_address_action_href: Maybe<StringQueryOperatorInput>;
  readonly home_contact_address_action_text: Maybe<StringQueryOperatorInput>;
  readonly footer_policies: Maybe<StringQueryOperatorInput>;
  readonly footer_about: Maybe<StringQueryOperatorInput>;
  readonly footer_getInvolved: Maybe<StringQueryOperatorInput>;
  readonly footer_social: Maybe<StringQueryOperatorInput>;
  readonly footer_handles_twitter: Maybe<StringQueryOperatorInput>;
  readonly footer_handles_facebook: Maybe<StringQueryOperatorInput>;
  readonly footer_handles_instagram: Maybe<StringQueryOperatorInput>;
  readonly footer_handles_youtube: Maybe<StringQueryOperatorInput>;
  readonly footer_copyright: Maybe<StringQueryOperatorInput>;
  readonly footer_credit: Maybe<StringQueryOperatorInput>;
  readonly footer_logIn: Maybe<StringQueryOperatorInput>;
  readonly footer_contribute: Maybe<StringQueryOperatorInput>;
  readonly post_donate_title: Maybe<StringQueryOperatorInput>;
  readonly post_donate_body: Maybe<StringQueryOperatorInput>;
  readonly post_donate_cta_href: Maybe<StringQueryOperatorInput>;
  readonly post_donate_cta_text: Maybe<StringQueryOperatorInput>;
  readonly branches_title: Maybe<StringQueryOperatorInput>;
  readonly branches_viewWebsite: Maybe<StringQueryOperatorInput>;
  readonly branches_readMore: Maybe<StringQueryOperatorInput>;
  readonly branches_charityWorkers_name: Maybe<StringQueryOperatorInput>;
  readonly branches_charityWorkers_description: Maybe<StringQueryOperatorInput>;
  readonly branches_cleanersAndFacilities_name: Maybe<StringQueryOperatorInput>;
  readonly branches_cleanersAndFacilities_description: Maybe<StringQueryOperatorInput>;
  readonly branches_couriersAndLogistics_description: Maybe<StringQueryOperatorInput>;
  readonly branches_couriersAndLogistics_name: Maybe<StringQueryOperatorInput>;
  readonly branches_cyclingInstructors_name: Maybe<StringQueryOperatorInput>;
  readonly branches_cyclingInstructors_description: Maybe<StringQueryOperatorInput>;
  readonly branches_fosterCareWorkers_name: Maybe<StringQueryOperatorInput>;
  readonly branches_fosterCareWorkers_description: Maybe<StringQueryOperatorInput>;
  readonly branches_gameWorkers_name: Maybe<StringQueryOperatorInput>;
  readonly branches_gameWorkers_description: Maybe<StringQueryOperatorInput>;
  readonly branches_generalMembers_description: Maybe<StringQueryOperatorInput>;
  readonly branches_generalMembers_name: Maybe<StringQueryOperatorInput>;
  readonly branches_securityAndReceptionists_name: Maybe<StringQueryOperatorInput>;
  readonly branches_securityAndReceptionists_description: Maybe<StringQueryOperatorInput>;
  readonly branches_unitedPrivateHireDrivers_description: Maybe<StringQueryOperatorInput>;
  readonly branches_unitedPrivateHireDrivers_name: Maybe<StringQueryOperatorInput>;
  readonly branches_universitiesOfLondon_name: Maybe<StringQueryOperatorInput>;
  readonly branches_universitiesOfLondon_description: Maybe<StringQueryOperatorInput>;
  readonly branches_yogaTeachers_name: Maybe<StringQueryOperatorInput>;
  readonly branches_yogaTeachers_description: Maybe<StringQueryOperatorInput>;
  readonly branches_nanniesAndAuPairs_name: Maybe<StringQueryOperatorInput>;
  readonly branches_nanniesAndAuPairs_description: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly apiUrl: Maybe<StringQueryOperatorInput>;
  readonly contentApiKey: Maybe<StringQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly mergeSecurityHeaders: Maybe<BooleanQueryOperatorInput>;
  readonly headers: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly languages: Maybe<StringQueryOperatorInput>;
  readonly defaultLanguage: Maybe<StringQueryOperatorInput>;
  readonly redirect: Maybe<BooleanQueryOperatorInput>;
  readonly apiKey: Maybe<StringQueryOperatorInput>;
  readonly tables: Maybe<SitePluginPluginOptionsTablesFilterListInput>;
  readonly trackingUrl: Maybe<StringQueryOperatorInput>;
  readonly siteId: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsHeadersFilterInput = {
  readonly _x: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsTablesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsTablesFilterInput>;
};

type SitePluginPluginOptionsTablesFilterInput = {
  readonly baseId: Maybe<StringQueryOperatorInput>;
  readonly tableName: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.language'
  | 'context.intl.language'
  | 'context.intl.languages'
  | 'context.intl.messages._404_title'
  | 'context.intl.messages._404_heading'
  | 'context.intl.messages._404_body'
  | 'context.intl.messages.global_iwgbLogo'
  | 'context.intl.messages.global_description'
  | 'context.intl.messages.global_slogan'
  | 'context.intl.messages.nav_news'
  | 'context.intl.messages.nav_campaigns'
  | 'context.intl.messages.nav_branches'
  | 'context.intl.messages.nav_about'
  | 'context.intl.messages.nav_support'
  | 'context.intl.messages.nav_getInvolved'
  | 'context.intl.messages.nav_democracy'
  | 'context.intl.messages.nav_joinButtonAlt'
  | 'context.intl.messages.nav_general'
  | 'context.intl.messages.nav_forSupporters'
  | 'context.intl.messages.nav_forMembers'
  | 'context.intl.messages.nav_more'
  | 'context.intl.messages.nav_contact'
  | 'context.intl.messages.join_contact_title'
  | 'context.intl.messages.join_contact_body'
  | 'context.intl.messages.join_fees_title'
  | 'context.intl.messages.join_fees_body'
  | 'context.intl.messages.join_fees_link_href'
  | 'context.intl.messages.join_fees_link_text'
  | 'context.intl.messages.join_jobType_charityWorker_description'
  | 'context.intl.messages.join_jobType_charityWorker_name'
  | 'context.intl.messages.join_jobType_cleanerFacilities_description'
  | 'context.intl.messages.join_jobType_cleanerFacilities_name'
  | 'context.intl.messages.join_jobType_courier_description'
  | 'context.intl.messages.join_jobType_courier_name'
  | 'context.intl.messages.join_jobType_cycleInstructor_description'
  | 'context.intl.messages.join_jobType_cycleInstructor_name'
  | 'context.intl.messages.join_jobType_fosterCarer_description'
  | 'context.intl.messages.join_jobType_fosterCarer_name'
  | 'context.intl.messages.join_jobType_gameWorker_description'
  | 'context.intl.messages.join_jobType_gameWorker_name'
  | 'context.intl.messages.join_jobType_higherEducation_description'
  | 'context.intl.messages.join_jobType_higherEducation_name'
  | 'context.intl.messages.join_jobType_nanny_description'
  | 'context.intl.messages.join_jobType_nanny_name'
  | 'context.intl.messages.join_jobType_other_description'
  | 'context.intl.messages.join_jobType_other_name'
  | 'context.intl.messages.join_jobType_privateHireDriver_description'
  | 'context.intl.messages.join_jobType_privateHireDriver_name'
  | 'context.intl.messages.join_jobType_securityReceptionist_description'
  | 'context.intl.messages.join_jobType_securityReceptionist_name'
  | 'context.intl.messages.join_jobType_yoga_teacher_description'
  | 'context.intl.messages.join_jobType_yoga_teacher_name'
  | 'context.intl.messages.join_jobType_yogaTeacher_description'
  | 'context.intl.messages.join_jobType_yogaTeacher_name'
  | 'context.intl.messages.join_loading_title'
  | 'context.intl.messages.join_loading_body'
  | 'context.intl.messages.join_title'
  | 'context.intl.messages.home_go'
  | 'context.intl.messages.home_takeAction'
  | 'context.intl.messages.home_moreStories'
  | 'context.intl.messages.home_weAre_1'
  | 'context.intl.messages.home_weAre_2'
  | 'context.intl.messages.home_weAre_body'
  | 'context.intl.messages.home_donate'
  | 'context.intl.messages.home_join'
  | 'context.intl.messages.home_readMore'
  | 'context.intl.messages.home_benefits_0_title'
  | 'context.intl.messages.home_benefits_0_body'
  | 'context.intl.messages.home_benefits_0_cta_href'
  | 'context.intl.messages.home_benefits_0_cta_text'
  | 'context.intl.messages.home_benefits_1_title'
  | 'context.intl.messages.home_benefits_1_body'
  | 'context.intl.messages.home_benefits_1_cta_href'
  | 'context.intl.messages.home_benefits_1_cta_text'
  | 'context.intl.messages.home_benefits_2_title'
  | 'context.intl.messages.home_benefits_2_body'
  | 'context.intl.messages.home_benefits_2_cta_href'
  | 'context.intl.messages.home_benefits_2_cta_text'
  | 'context.intl.messages.home_benefits_image'
  | 'context.intl.messages.home_benefits_title'
  | 'context.intl.messages.home_contact_title'
  | 'context.intl.messages.home_contact_body'
  | 'context.intl.messages.home_contact_copy'
  | 'context.intl.messages.home_contact_form_href'
  | 'context.intl.messages.home_contact_form_text'
  | 'context.intl.messages.home_contact_form_linkText'
  | 'context.intl.messages.home_contact_phone_value'
  | 'context.intl.messages.home_contact_phone_openingHours'
  | 'context.intl.messages.home_contact_phone_action_href'
  | 'context.intl.messages.home_contact_phone_action_text'
  | 'context.intl.messages.home_contact_address_value'
  | 'context.intl.messages.home_contact_address_action_href'
  | 'context.intl.messages.home_contact_address_action_text'
  | 'context.intl.messages.footer_policies'
  | 'context.intl.messages.footer_about'
  | 'context.intl.messages.footer_getInvolved'
  | 'context.intl.messages.footer_social'
  | 'context.intl.messages.footer_handles_twitter'
  | 'context.intl.messages.footer_handles_facebook'
  | 'context.intl.messages.footer_handles_instagram'
  | 'context.intl.messages.footer_handles_youtube'
  | 'context.intl.messages.footer_copyright'
  | 'context.intl.messages.footer_credit'
  | 'context.intl.messages.footer_logIn'
  | 'context.intl.messages.footer_contribute'
  | 'context.intl.messages.post_donate_title'
  | 'context.intl.messages.post_donate_body'
  | 'context.intl.messages.post_donate_cta_href'
  | 'context.intl.messages.post_donate_cta_text'
  | 'context.intl.messages.branches_title'
  | 'context.intl.messages.branches_viewWebsite'
  | 'context.intl.messages.branches_readMore'
  | 'context.intl.messages.branches_charityWorkers_name'
  | 'context.intl.messages.branches_charityWorkers_description'
  | 'context.intl.messages.branches_cleanersAndFacilities_name'
  | 'context.intl.messages.branches_cleanersAndFacilities_description'
  | 'context.intl.messages.branches_couriersAndLogistics_description'
  | 'context.intl.messages.branches_couriersAndLogistics_name'
  | 'context.intl.messages.branches_cyclingInstructors_name'
  | 'context.intl.messages.branches_cyclingInstructors_description'
  | 'context.intl.messages.branches_fosterCareWorkers_name'
  | 'context.intl.messages.branches_fosterCareWorkers_description'
  | 'context.intl.messages.branches_gameWorkers_name'
  | 'context.intl.messages.branches_gameWorkers_description'
  | 'context.intl.messages.branches_generalMembers_description'
  | 'context.intl.messages.branches_generalMembers_name'
  | 'context.intl.messages.branches_securityAndReceptionists_name'
  | 'context.intl.messages.branches_securityAndReceptionists_description'
  | 'context.intl.messages.branches_unitedPrivateHireDrivers_description'
  | 'context.intl.messages.branches_unitedPrivateHireDrivers_name'
  | 'context.intl.messages.branches_universitiesOfLondon_name'
  | 'context.intl.messages.branches_universitiesOfLondon_description'
  | 'context.intl.messages.branches_yogaTeachers_name'
  | 'context.intl.messages.branches_yogaTeachers_description'
  | 'context.intl.messages.branches_nanniesAndAuPairs_name'
  | 'context.intl.messages.branches_nanniesAndAuPairs_description'
  | 'context.intl.routed'
  | 'context.intl.originalPath'
  | 'context.intl.redirect'
  | 'context.intl.defaultLanguage'
  | 'context.jobTypes'
  | 'context.contentSlugs'
  | 'context.jobType'
  | 'context.slugs'
  | 'context.hasPrevious'
  | 'context.hasNext'
  | 'context.page'
  | 'context.pages'
  | 'context.featuredSlug'
  | 'context.recentStorySlugs'
  | 'context.campaignSlugs'
  | 'context.heroCtaSlugs'
  | 'context.locales'
  | 'context.id'
  | 'context.title'
  | 'context.header_img'
  | 'context.content'
  | 'context.timestamp'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.apiUrl'
  | 'pluginCreator.pluginOptions.contentApiKey'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.mergeSecurityHeaders'
  | 'pluginCreator.pluginOptions.headers._x'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.languages'
  | 'pluginCreator.pluginOptions.defaultLanguage'
  | 'pluginCreator.pluginOptions.redirect'
  | 'pluginCreator.pluginOptions.apiKey'
  | 'pluginCreator.pluginOptions.tables'
  | 'pluginCreator.pluginOptions.tables.baseId'
  | 'pluginCreator.pluginOptions.tables.tableName'
  | 'pluginCreator.pluginOptions.trackingUrl'
  | 'pluginCreator.pluginOptions.siteId'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostTagFilterListInput = {
  readonly elemMatch: Maybe<GhostTagFilterInput>;
};

type GhostTagFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly feature_image: Maybe<StringQueryOperatorInput>;
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly count: Maybe<GhostPostCountFilterInput>;
  readonly postCount: Maybe<IntQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly canonical_url: Maybe<StringQueryOperatorInput>;
  readonly accent_color: Maybe<StringQueryOperatorInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostPostCountFilterInput = {
  readonly posts: Maybe<IntQueryOperatorInput>;
};

type GhostAuthorFilterListInput = {
  readonly elemMatch: Maybe<GhostAuthorFilterInput>;
};

type GhostAuthorFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly profile_image: Maybe<StringQueryOperatorInput>;
  readonly cover_image: Maybe<StringQueryOperatorInput>;
  readonly bio: Maybe<StringQueryOperatorInput>;
  readonly website: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly count: Maybe<GhostPostCountFilterInput>;
  readonly postCount: Maybe<IntQueryOperatorInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPostEdge>;
  readonly nodes: ReadonlyArray<GhostPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GhostPostGroupConnection>;
};


type GhostPostConnection_distinctArgs = {
  field: GhostPostFieldsEnum;
};


type GhostPostConnection_maxArgs = {
  field: GhostPostFieldsEnum;
};


type GhostPostConnection_minArgs = {
  field: GhostPostFieldsEnum;
};


type GhostPostConnection_sumArgs = {
  field: GhostPostFieldsEnum;
};


type GhostPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostPostFieldsEnum;
};

type GhostPostEdge = {
  readonly next: Maybe<GhostPost>;
  readonly node: GhostPost;
  readonly previous: Maybe<GhostPost>;
};

type GhostPostFieldsEnum =
  | 'slug'
  | 'id'
  | 'uuid'
  | 'title'
  | 'html'
  | 'comment_id'
  | 'feature_image'
  | 'featured'
  | 'visibility'
  | 'created_at'
  | 'updated_at'
  | 'published_at'
  | 'custom_excerpt'
  | 'codeinjection_head'
  | 'codeinjection_foot'
  | 'codeinjection_styles'
  | 'custom_template'
  | 'canonical_url'
  | 'send_email_when_published'
  | 'tags'
  | 'tags.slug'
  | 'tags.id'
  | 'tags.name'
  | 'tags.description'
  | 'tags.feature_image'
  | 'tags.visibility'
  | 'tags.meta_title'
  | 'tags.meta_description'
  | 'tags.url'
  | 'tags.count.posts'
  | 'tags.postCount'
  | 'tags.og_image'
  | 'tags.og_title'
  | 'tags.og_description'
  | 'tags.twitter_image'
  | 'tags.twitter_title'
  | 'tags.twitter_description'
  | 'tags.codeinjection_head'
  | 'tags.codeinjection_foot'
  | 'tags.canonical_url'
  | 'tags.accent_color'
  | 'tags.ghostId'
  | 'tags.parent.id'
  | 'tags.parent.parent.id'
  | 'tags.parent.parent.children'
  | 'tags.parent.children'
  | 'tags.parent.children.id'
  | 'tags.parent.children.children'
  | 'tags.parent.internal.content'
  | 'tags.parent.internal.contentDigest'
  | 'tags.parent.internal.description'
  | 'tags.parent.internal.fieldOwners'
  | 'tags.parent.internal.ignoreType'
  | 'tags.parent.internal.mediaType'
  | 'tags.parent.internal.owner'
  | 'tags.parent.internal.type'
  | 'tags.children'
  | 'tags.children.id'
  | 'tags.children.parent.id'
  | 'tags.children.parent.children'
  | 'tags.children.children'
  | 'tags.children.children.id'
  | 'tags.children.children.children'
  | 'tags.children.internal.content'
  | 'tags.children.internal.contentDigest'
  | 'tags.children.internal.description'
  | 'tags.children.internal.fieldOwners'
  | 'tags.children.internal.ignoreType'
  | 'tags.children.internal.mediaType'
  | 'tags.children.internal.owner'
  | 'tags.children.internal.type'
  | 'tags.internal.content'
  | 'tags.internal.contentDigest'
  | 'tags.internal.description'
  | 'tags.internal.fieldOwners'
  | 'tags.internal.ignoreType'
  | 'tags.internal.mediaType'
  | 'tags.internal.owner'
  | 'tags.internal.type'
  | 'authors'
  | 'authors.slug'
  | 'authors.id'
  | 'authors.name'
  | 'authors.profile_image'
  | 'authors.cover_image'
  | 'authors.bio'
  | 'authors.website'
  | 'authors.location'
  | 'authors.facebook'
  | 'authors.twitter'
  | 'authors.meta_title'
  | 'authors.meta_description'
  | 'authors.url'
  | 'authors.count.posts'
  | 'authors.postCount'
  | 'authors.ghostId'
  | 'authors.parent.id'
  | 'authors.parent.parent.id'
  | 'authors.parent.parent.children'
  | 'authors.parent.children'
  | 'authors.parent.children.id'
  | 'authors.parent.children.children'
  | 'authors.parent.internal.content'
  | 'authors.parent.internal.contentDigest'
  | 'authors.parent.internal.description'
  | 'authors.parent.internal.fieldOwners'
  | 'authors.parent.internal.ignoreType'
  | 'authors.parent.internal.mediaType'
  | 'authors.parent.internal.owner'
  | 'authors.parent.internal.type'
  | 'authors.children'
  | 'authors.children.id'
  | 'authors.children.parent.id'
  | 'authors.children.parent.children'
  | 'authors.children.children'
  | 'authors.children.children.id'
  | 'authors.children.children.children'
  | 'authors.children.internal.content'
  | 'authors.children.internal.contentDigest'
  | 'authors.children.internal.description'
  | 'authors.children.internal.fieldOwners'
  | 'authors.children.internal.ignoreType'
  | 'authors.children.internal.mediaType'
  | 'authors.children.internal.owner'
  | 'authors.children.internal.type'
  | 'authors.internal.content'
  | 'authors.internal.contentDigest'
  | 'authors.internal.description'
  | 'authors.internal.fieldOwners'
  | 'authors.internal.ignoreType'
  | 'authors.internal.mediaType'
  | 'authors.internal.owner'
  | 'authors.internal.type'
  | 'primary_author.slug'
  | 'primary_author.id'
  | 'primary_author.name'
  | 'primary_author.profile_image'
  | 'primary_author.cover_image'
  | 'primary_author.bio'
  | 'primary_author.website'
  | 'primary_author.location'
  | 'primary_author.facebook'
  | 'primary_author.twitter'
  | 'primary_author.meta_title'
  | 'primary_author.meta_description'
  | 'primary_author.url'
  | 'primary_author.count.posts'
  | 'primary_author.postCount'
  | 'primary_author.ghostId'
  | 'primary_author.parent.id'
  | 'primary_author.parent.parent.id'
  | 'primary_author.parent.parent.children'
  | 'primary_author.parent.children'
  | 'primary_author.parent.children.id'
  | 'primary_author.parent.children.children'
  | 'primary_author.parent.internal.content'
  | 'primary_author.parent.internal.contentDigest'
  | 'primary_author.parent.internal.description'
  | 'primary_author.parent.internal.fieldOwners'
  | 'primary_author.parent.internal.ignoreType'
  | 'primary_author.parent.internal.mediaType'
  | 'primary_author.parent.internal.owner'
  | 'primary_author.parent.internal.type'
  | 'primary_author.children'
  | 'primary_author.children.id'
  | 'primary_author.children.parent.id'
  | 'primary_author.children.parent.children'
  | 'primary_author.children.children'
  | 'primary_author.children.children.id'
  | 'primary_author.children.children.children'
  | 'primary_author.children.internal.content'
  | 'primary_author.children.internal.contentDigest'
  | 'primary_author.children.internal.description'
  | 'primary_author.children.internal.fieldOwners'
  | 'primary_author.children.internal.ignoreType'
  | 'primary_author.children.internal.mediaType'
  | 'primary_author.children.internal.owner'
  | 'primary_author.children.internal.type'
  | 'primary_author.internal.content'
  | 'primary_author.internal.contentDigest'
  | 'primary_author.internal.description'
  | 'primary_author.internal.fieldOwners'
  | 'primary_author.internal.ignoreType'
  | 'primary_author.internal.mediaType'
  | 'primary_author.internal.owner'
  | 'primary_author.internal.type'
  | 'primary_tag.slug'
  | 'primary_tag.id'
  | 'primary_tag.name'
  | 'primary_tag.description'
  | 'primary_tag.feature_image'
  | 'primary_tag.visibility'
  | 'primary_tag.meta_title'
  | 'primary_tag.meta_description'
  | 'primary_tag.url'
  | 'primary_tag.count.posts'
  | 'primary_tag.postCount'
  | 'primary_tag.og_image'
  | 'primary_tag.og_title'
  | 'primary_tag.og_description'
  | 'primary_tag.twitter_image'
  | 'primary_tag.twitter_title'
  | 'primary_tag.twitter_description'
  | 'primary_tag.codeinjection_head'
  | 'primary_tag.codeinjection_foot'
  | 'primary_tag.canonical_url'
  | 'primary_tag.accent_color'
  | 'primary_tag.ghostId'
  | 'primary_tag.parent.id'
  | 'primary_tag.parent.parent.id'
  | 'primary_tag.parent.parent.children'
  | 'primary_tag.parent.children'
  | 'primary_tag.parent.children.id'
  | 'primary_tag.parent.children.children'
  | 'primary_tag.parent.internal.content'
  | 'primary_tag.parent.internal.contentDigest'
  | 'primary_tag.parent.internal.description'
  | 'primary_tag.parent.internal.fieldOwners'
  | 'primary_tag.parent.internal.ignoreType'
  | 'primary_tag.parent.internal.mediaType'
  | 'primary_tag.parent.internal.owner'
  | 'primary_tag.parent.internal.type'
  | 'primary_tag.children'
  | 'primary_tag.children.id'
  | 'primary_tag.children.parent.id'
  | 'primary_tag.children.parent.children'
  | 'primary_tag.children.children'
  | 'primary_tag.children.children.id'
  | 'primary_tag.children.children.children'
  | 'primary_tag.children.internal.content'
  | 'primary_tag.children.internal.contentDigest'
  | 'primary_tag.children.internal.description'
  | 'primary_tag.children.internal.fieldOwners'
  | 'primary_tag.children.internal.ignoreType'
  | 'primary_tag.children.internal.mediaType'
  | 'primary_tag.children.internal.owner'
  | 'primary_tag.children.internal.type'
  | 'primary_tag.internal.content'
  | 'primary_tag.internal.contentDigest'
  | 'primary_tag.internal.description'
  | 'primary_tag.internal.fieldOwners'
  | 'primary_tag.internal.ignoreType'
  | 'primary_tag.internal.mediaType'
  | 'primary_tag.internal.owner'
  | 'primary_tag.internal.type'
  | 'url'
  | 'excerpt'
  | 'reading_time'
  | 'email_subject'
  | 'plaintext'
  | 'page'
  | 'og_image'
  | 'og_title'
  | 'og_description'
  | 'twitter_image'
  | 'twitter_title'
  | 'twitter_description'
  | 'meta_title'
  | 'meta_description'
  | 'email_recipient_filter'
  | 'access'
  | 'ghostId'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GhostPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPostEdge>;
  readonly nodes: ReadonlyArray<GhostPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostPostFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly uuid: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly comment_id: Maybe<StringQueryOperatorInput>;
  readonly feature_image: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly published_at: Maybe<DateQueryOperatorInput>;
  readonly custom_excerpt: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_styles: Maybe<StringQueryOperatorInput>;
  readonly custom_template: Maybe<StringQueryOperatorInput>;
  readonly canonical_url: Maybe<StringQueryOperatorInput>;
  readonly send_email_when_published: Maybe<BooleanQueryOperatorInput>;
  readonly tags: Maybe<GhostTagFilterListInput>;
  readonly authors: Maybe<GhostAuthorFilterListInput>;
  readonly primary_author: Maybe<GhostAuthorFilterInput>;
  readonly primary_tag: Maybe<GhostTagFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly reading_time: Maybe<IntQueryOperatorInput>;
  readonly email_subject: Maybe<StringQueryOperatorInput>;
  readonly plaintext: Maybe<StringQueryOperatorInput>;
  readonly page: Maybe<BooleanQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly email_recipient_filter: Maybe<StringQueryOperatorInput>;
  readonly access: Maybe<BooleanQueryOperatorInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPageEdge>;
  readonly nodes: ReadonlyArray<GhostPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GhostPageGroupConnection>;
};


type GhostPageConnection_distinctArgs = {
  field: GhostPageFieldsEnum;
};


type GhostPageConnection_maxArgs = {
  field: GhostPageFieldsEnum;
};


type GhostPageConnection_minArgs = {
  field: GhostPageFieldsEnum;
};


type GhostPageConnection_sumArgs = {
  field: GhostPageFieldsEnum;
};


type GhostPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostPageFieldsEnum;
};

type GhostPageEdge = {
  readonly next: Maybe<GhostPage>;
  readonly node: GhostPage;
  readonly previous: Maybe<GhostPage>;
};

type GhostPageFieldsEnum =
  | 'slug'
  | 'id'
  | 'uuid'
  | 'title'
  | 'html'
  | 'comment_id'
  | 'feature_image'
  | 'featured'
  | 'visibility'
  | 'created_at'
  | 'updated_at'
  | 'published_at'
  | 'custom_excerpt'
  | 'codeinjection_head'
  | 'codeinjection_foot'
  | 'codeinjection_styles'
  | 'custom_template'
  | 'canonical_url'
  | 'send_email_when_published'
  | 'tags'
  | 'tags.slug'
  | 'tags.id'
  | 'tags.name'
  | 'tags.description'
  | 'tags.feature_image'
  | 'tags.visibility'
  | 'tags.meta_title'
  | 'tags.meta_description'
  | 'tags.url'
  | 'tags.count.posts'
  | 'tags.postCount'
  | 'tags.og_image'
  | 'tags.og_title'
  | 'tags.og_description'
  | 'tags.twitter_image'
  | 'tags.twitter_title'
  | 'tags.twitter_description'
  | 'tags.codeinjection_head'
  | 'tags.codeinjection_foot'
  | 'tags.canonical_url'
  | 'tags.accent_color'
  | 'tags.ghostId'
  | 'tags.parent.id'
  | 'tags.parent.parent.id'
  | 'tags.parent.parent.children'
  | 'tags.parent.children'
  | 'tags.parent.children.id'
  | 'tags.parent.children.children'
  | 'tags.parent.internal.content'
  | 'tags.parent.internal.contentDigest'
  | 'tags.parent.internal.description'
  | 'tags.parent.internal.fieldOwners'
  | 'tags.parent.internal.ignoreType'
  | 'tags.parent.internal.mediaType'
  | 'tags.parent.internal.owner'
  | 'tags.parent.internal.type'
  | 'tags.children'
  | 'tags.children.id'
  | 'tags.children.parent.id'
  | 'tags.children.parent.children'
  | 'tags.children.children'
  | 'tags.children.children.id'
  | 'tags.children.children.children'
  | 'tags.children.internal.content'
  | 'tags.children.internal.contentDigest'
  | 'tags.children.internal.description'
  | 'tags.children.internal.fieldOwners'
  | 'tags.children.internal.ignoreType'
  | 'tags.children.internal.mediaType'
  | 'tags.children.internal.owner'
  | 'tags.children.internal.type'
  | 'tags.internal.content'
  | 'tags.internal.contentDigest'
  | 'tags.internal.description'
  | 'tags.internal.fieldOwners'
  | 'tags.internal.ignoreType'
  | 'tags.internal.mediaType'
  | 'tags.internal.owner'
  | 'tags.internal.type'
  | 'authors'
  | 'authors.slug'
  | 'authors.id'
  | 'authors.name'
  | 'authors.profile_image'
  | 'authors.cover_image'
  | 'authors.bio'
  | 'authors.website'
  | 'authors.location'
  | 'authors.facebook'
  | 'authors.twitter'
  | 'authors.meta_title'
  | 'authors.meta_description'
  | 'authors.url'
  | 'authors.count.posts'
  | 'authors.postCount'
  | 'authors.ghostId'
  | 'authors.parent.id'
  | 'authors.parent.parent.id'
  | 'authors.parent.parent.children'
  | 'authors.parent.children'
  | 'authors.parent.children.id'
  | 'authors.parent.children.children'
  | 'authors.parent.internal.content'
  | 'authors.parent.internal.contentDigest'
  | 'authors.parent.internal.description'
  | 'authors.parent.internal.fieldOwners'
  | 'authors.parent.internal.ignoreType'
  | 'authors.parent.internal.mediaType'
  | 'authors.parent.internal.owner'
  | 'authors.parent.internal.type'
  | 'authors.children'
  | 'authors.children.id'
  | 'authors.children.parent.id'
  | 'authors.children.parent.children'
  | 'authors.children.children'
  | 'authors.children.children.id'
  | 'authors.children.children.children'
  | 'authors.children.internal.content'
  | 'authors.children.internal.contentDigest'
  | 'authors.children.internal.description'
  | 'authors.children.internal.fieldOwners'
  | 'authors.children.internal.ignoreType'
  | 'authors.children.internal.mediaType'
  | 'authors.children.internal.owner'
  | 'authors.children.internal.type'
  | 'authors.internal.content'
  | 'authors.internal.contentDigest'
  | 'authors.internal.description'
  | 'authors.internal.fieldOwners'
  | 'authors.internal.ignoreType'
  | 'authors.internal.mediaType'
  | 'authors.internal.owner'
  | 'authors.internal.type'
  | 'primary_author.slug'
  | 'primary_author.id'
  | 'primary_author.name'
  | 'primary_author.profile_image'
  | 'primary_author.cover_image'
  | 'primary_author.bio'
  | 'primary_author.website'
  | 'primary_author.location'
  | 'primary_author.facebook'
  | 'primary_author.twitter'
  | 'primary_author.meta_title'
  | 'primary_author.meta_description'
  | 'primary_author.url'
  | 'primary_author.count.posts'
  | 'primary_author.postCount'
  | 'primary_author.ghostId'
  | 'primary_author.parent.id'
  | 'primary_author.parent.parent.id'
  | 'primary_author.parent.parent.children'
  | 'primary_author.parent.children'
  | 'primary_author.parent.children.id'
  | 'primary_author.parent.children.children'
  | 'primary_author.parent.internal.content'
  | 'primary_author.parent.internal.contentDigest'
  | 'primary_author.parent.internal.description'
  | 'primary_author.parent.internal.fieldOwners'
  | 'primary_author.parent.internal.ignoreType'
  | 'primary_author.parent.internal.mediaType'
  | 'primary_author.parent.internal.owner'
  | 'primary_author.parent.internal.type'
  | 'primary_author.children'
  | 'primary_author.children.id'
  | 'primary_author.children.parent.id'
  | 'primary_author.children.parent.children'
  | 'primary_author.children.children'
  | 'primary_author.children.children.id'
  | 'primary_author.children.children.children'
  | 'primary_author.children.internal.content'
  | 'primary_author.children.internal.contentDigest'
  | 'primary_author.children.internal.description'
  | 'primary_author.children.internal.fieldOwners'
  | 'primary_author.children.internal.ignoreType'
  | 'primary_author.children.internal.mediaType'
  | 'primary_author.children.internal.owner'
  | 'primary_author.children.internal.type'
  | 'primary_author.internal.content'
  | 'primary_author.internal.contentDigest'
  | 'primary_author.internal.description'
  | 'primary_author.internal.fieldOwners'
  | 'primary_author.internal.ignoreType'
  | 'primary_author.internal.mediaType'
  | 'primary_author.internal.owner'
  | 'primary_author.internal.type'
  | 'primary_tag.slug'
  | 'primary_tag.id'
  | 'primary_tag.name'
  | 'primary_tag.description'
  | 'primary_tag.feature_image'
  | 'primary_tag.visibility'
  | 'primary_tag.meta_title'
  | 'primary_tag.meta_description'
  | 'primary_tag.url'
  | 'primary_tag.count.posts'
  | 'primary_tag.postCount'
  | 'primary_tag.og_image'
  | 'primary_tag.og_title'
  | 'primary_tag.og_description'
  | 'primary_tag.twitter_image'
  | 'primary_tag.twitter_title'
  | 'primary_tag.twitter_description'
  | 'primary_tag.codeinjection_head'
  | 'primary_tag.codeinjection_foot'
  | 'primary_tag.canonical_url'
  | 'primary_tag.accent_color'
  | 'primary_tag.ghostId'
  | 'primary_tag.parent.id'
  | 'primary_tag.parent.parent.id'
  | 'primary_tag.parent.parent.children'
  | 'primary_tag.parent.children'
  | 'primary_tag.parent.children.id'
  | 'primary_tag.parent.children.children'
  | 'primary_tag.parent.internal.content'
  | 'primary_tag.parent.internal.contentDigest'
  | 'primary_tag.parent.internal.description'
  | 'primary_tag.parent.internal.fieldOwners'
  | 'primary_tag.parent.internal.ignoreType'
  | 'primary_tag.parent.internal.mediaType'
  | 'primary_tag.parent.internal.owner'
  | 'primary_tag.parent.internal.type'
  | 'primary_tag.children'
  | 'primary_tag.children.id'
  | 'primary_tag.children.parent.id'
  | 'primary_tag.children.parent.children'
  | 'primary_tag.children.children'
  | 'primary_tag.children.children.id'
  | 'primary_tag.children.children.children'
  | 'primary_tag.children.internal.content'
  | 'primary_tag.children.internal.contentDigest'
  | 'primary_tag.children.internal.description'
  | 'primary_tag.children.internal.fieldOwners'
  | 'primary_tag.children.internal.ignoreType'
  | 'primary_tag.children.internal.mediaType'
  | 'primary_tag.children.internal.owner'
  | 'primary_tag.children.internal.type'
  | 'primary_tag.internal.content'
  | 'primary_tag.internal.contentDigest'
  | 'primary_tag.internal.description'
  | 'primary_tag.internal.fieldOwners'
  | 'primary_tag.internal.ignoreType'
  | 'primary_tag.internal.mediaType'
  | 'primary_tag.internal.owner'
  | 'primary_tag.internal.type'
  | 'url'
  | 'excerpt'
  | 'reading_time'
  | 'email_subject'
  | 'plaintext'
  | 'page'
  | 'og_image'
  | 'og_title'
  | 'og_description'
  | 'twitter_image'
  | 'twitter_title'
  | 'twitter_description'
  | 'meta_title'
  | 'meta_description'
  | 'access'
  | 'ghostId'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GhostPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostPageEdge>;
  readonly nodes: ReadonlyArray<GhostPage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostPageFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly uuid: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly comment_id: Maybe<StringQueryOperatorInput>;
  readonly feature_image: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly created_at: Maybe<DateQueryOperatorInput>;
  readonly updated_at: Maybe<DateQueryOperatorInput>;
  readonly published_at: Maybe<DateQueryOperatorInput>;
  readonly custom_excerpt: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_styles: Maybe<StringQueryOperatorInput>;
  readonly custom_template: Maybe<StringQueryOperatorInput>;
  readonly canonical_url: Maybe<StringQueryOperatorInput>;
  readonly send_email_when_published: Maybe<BooleanQueryOperatorInput>;
  readonly tags: Maybe<GhostTagFilterListInput>;
  readonly authors: Maybe<GhostAuthorFilterListInput>;
  readonly primary_author: Maybe<GhostAuthorFilterInput>;
  readonly primary_tag: Maybe<GhostTagFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly reading_time: Maybe<IntQueryOperatorInput>;
  readonly email_subject: Maybe<StringQueryOperatorInput>;
  readonly plaintext: Maybe<StringQueryOperatorInput>;
  readonly page: Maybe<BooleanQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly access: Maybe<BooleanQueryOperatorInput>;
  readonly ghostId: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostTagEdge>;
  readonly nodes: ReadonlyArray<GhostTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GhostTagGroupConnection>;
};


type GhostTagConnection_distinctArgs = {
  field: GhostTagFieldsEnum;
};


type GhostTagConnection_maxArgs = {
  field: GhostTagFieldsEnum;
};


type GhostTagConnection_minArgs = {
  field: GhostTagFieldsEnum;
};


type GhostTagConnection_sumArgs = {
  field: GhostTagFieldsEnum;
};


type GhostTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostTagFieldsEnum;
};

type GhostTagEdge = {
  readonly next: Maybe<GhostTag>;
  readonly node: GhostTag;
  readonly previous: Maybe<GhostTag>;
};

type GhostTagFieldsEnum =
  | 'slug'
  | 'id'
  | 'name'
  | 'description'
  | 'feature_image'
  | 'visibility'
  | 'meta_title'
  | 'meta_description'
  | 'url'
  | 'count.posts'
  | 'postCount'
  | 'og_image'
  | 'og_title'
  | 'og_description'
  | 'twitter_image'
  | 'twitter_title'
  | 'twitter_description'
  | 'codeinjection_head'
  | 'codeinjection_foot'
  | 'canonical_url'
  | 'accent_color'
  | 'ghostId'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GhostTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostTagEdge>;
  readonly nodes: ReadonlyArray<GhostTag>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostAuthorEdge>;
  readonly nodes: ReadonlyArray<GhostAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GhostAuthorGroupConnection>;
};


type GhostAuthorConnection_distinctArgs = {
  field: GhostAuthorFieldsEnum;
};


type GhostAuthorConnection_maxArgs = {
  field: GhostAuthorFieldsEnum;
};


type GhostAuthorConnection_minArgs = {
  field: GhostAuthorFieldsEnum;
};


type GhostAuthorConnection_sumArgs = {
  field: GhostAuthorFieldsEnum;
};


type GhostAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostAuthorFieldsEnum;
};

type GhostAuthorEdge = {
  readonly next: Maybe<GhostAuthor>;
  readonly node: GhostAuthor;
  readonly previous: Maybe<GhostAuthor>;
};

type GhostAuthorFieldsEnum =
  | 'slug'
  | 'id'
  | 'name'
  | 'profile_image'
  | 'cover_image'
  | 'bio'
  | 'website'
  | 'location'
  | 'facebook'
  | 'twitter'
  | 'meta_title'
  | 'meta_description'
  | 'url'
  | 'count.posts'
  | 'postCount'
  | 'ghostId'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GhostAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostAuthorEdge>;
  readonly nodes: ReadonlyArray<GhostAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostNavigationFilterListInput = {
  readonly elemMatch: Maybe<GhostNavigationFilterInput>;
};

type GhostNavigationFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type GhostSettingsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostSettingsEdge>;
  readonly nodes: ReadonlyArray<GhostSettings>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GhostSettingsGroupConnection>;
};


type GhostSettingsConnection_distinctArgs = {
  field: GhostSettingsFieldsEnum;
};


type GhostSettingsConnection_maxArgs = {
  field: GhostSettingsFieldsEnum;
};


type GhostSettingsConnection_minArgs = {
  field: GhostSettingsFieldsEnum;
};


type GhostSettingsConnection_sumArgs = {
  field: GhostSettingsFieldsEnum;
};


type GhostSettingsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GhostSettingsFieldsEnum;
};

type GhostSettingsEdge = {
  readonly next: Maybe<GhostSettings>;
  readonly node: GhostSettings;
  readonly previous: Maybe<GhostSettings>;
};

type GhostSettingsFieldsEnum =
  | 'title'
  | 'description'
  | 'logo'
  | 'icon'
  | 'cover_image'
  | 'facebook'
  | 'twitter'
  | 'lang'
  | 'timezone'
  | 'navigation'
  | 'navigation.label'
  | 'navigation.url'
  | 'secondary_navigation'
  | 'secondary_navigation.label'
  | 'secondary_navigation.url'
  | 'meta_title'
  | 'meta_description'
  | 'og_image'
  | 'og_title'
  | 'og_description'
  | 'twitter_image'
  | 'twitter_title'
  | 'twitter_description'
  | 'url'
  | 'codeinjection_head'
  | 'codeinjection_foot'
  | 'codeinjection_styles'
  | 'active_timezone'
  | 'default_locale'
  | 'members_support_address'
  | 'ghostId'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GhostSettingsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GhostSettingsEdge>;
  readonly nodes: ReadonlyArray<GhostSettings>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GhostSettingsFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly cover_image: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly timezone: Maybe<StringQueryOperatorInput>;
  readonly navigation: Maybe<GhostNavigationFilterListInput>;
  readonly secondary_navigation: Maybe<GhostNavigationFilterListInput>;
  readonly meta_title: Maybe<StringQueryOperatorInput>;
  readonly meta_description: Maybe<StringQueryOperatorInput>;
  readonly og_image: Maybe<StringQueryOperatorInput>;
  readonly og_title: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly twitter_image: Maybe<StringQueryOperatorInput>;
  readonly twitter_title: Maybe<StringQueryOperatorInput>;
  readonly twitter_description: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_head: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_foot: Maybe<StringQueryOperatorInput>;
  readonly codeinjection_styles: Maybe<StringQueryOperatorInput>;
  readonly active_timezone: Maybe<StringQueryOperatorInput>;
  readonly default_locale: Maybe<StringQueryOperatorInput>;
  readonly members_support_address: Maybe<StringQueryOperatorInput>;
  readonly ghostId: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GhostSettingsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GhostSettingsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.apiUrl'
  | 'pluginOptions.contentApiKey'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.mergeSecurityHeaders'
  | 'pluginOptions.headers._x'
  | 'pluginOptions.path'
  | 'pluginOptions.languages'
  | 'pluginOptions.defaultLanguage'
  | 'pluginOptions.redirect'
  | 'pluginOptions.apiKey'
  | 'pluginOptions.tables'
  | 'pluginOptions.tables.baseId'
  | 'pluginOptions.tables.tableName'
  | 'pluginOptions.trackingUrl'
  | 'pluginOptions.siteId'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type AirtableDataFilterInput = {
  readonly Slug: Maybe<StringQueryOperatorInput>;
  readonly Sort: Maybe<BooleanQueryOperatorInput>;
  readonly Typeform_ID: Maybe<StringQueryOperatorInput>;
  readonly Image: Maybe<StringQueryOperatorInput>;
  readonly Instagram: Maybe<StringQueryOperatorInput>;
  readonly Facebook: Maybe<StringQueryOperatorInput>;
  readonly Link: Maybe<StringQueryOperatorInput>;
  readonly Twitter: Maybe<StringQueryOperatorInput>;
  readonly Name: Maybe<StringQueryOperatorInput>;
  readonly Plan: Maybe<StringQueryOperatorInput>;
};

type AirtableConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AirtableEdge>;
  readonly nodes: ReadonlyArray<Airtable>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<AirtableGroupConnection>;
};


type AirtableConnection_distinctArgs = {
  field: AirtableFieldsEnum;
};


type AirtableConnection_maxArgs = {
  field: AirtableFieldsEnum;
};


type AirtableConnection_minArgs = {
  field: AirtableFieldsEnum;
};


type AirtableConnection_sumArgs = {
  field: AirtableFieldsEnum;
};


type AirtableConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: AirtableFieldsEnum;
};

type AirtableEdge = {
  readonly next: Maybe<Airtable>;
  readonly node: Airtable;
  readonly previous: Maybe<Airtable>;
};

type AirtableFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'table'
  | 'recordId'
  | 'rowIndex'
  | 'data.Slug'
  | 'data.Sort'
  | 'data.Typeform_ID'
  | 'data.Image'
  | 'data.Instagram'
  | 'data.Facebook'
  | 'data.Link'
  | 'data.Twitter'
  | 'data.Name'
  | 'data.Plan';

type AirtableGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<AirtableEdge>;
  readonly nodes: ReadonlyArray<Airtable>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type AirtableFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly table: Maybe<StringQueryOperatorInput>;
  readonly recordId: Maybe<StringQueryOperatorInput>;
  readonly rowIndex: Maybe<IntQueryOperatorInput>;
  readonly data: Maybe<AirtableDataFilterInput>;
};

type AirtableSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<AirtableFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GhostPageFieldsFragment = { readonly edges: ReadonlyArray<{ readonly node: (
      Pick<GhostPage, 'title' | 'slug' | 'feature_image' | 'excerpt' | 'html' | 'meta_description' | 'meta_title' | 'og_description' | 'og_image' | 'og_title' | 'published_at' | 'twitter_description' | 'twitter_image' | 'twitter_title'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<GhostTag, 'slug'>>>> }
    ) }> };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesCampaignsTsx2917126296QueryVariables = Exact<{ [key: string]: never; }>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesCampaignsTsx2917126296Query = { readonly allGhostPage: GhostPageFieldsFragment };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesBranchesTsx435387746QueryVariables = Exact<{ [key: string]: never; }>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesBranchesTsx435387746Query = { readonly allAirtable: { readonly edges: ReadonlyArray<{ readonly node: { readonly data: Maybe<Pick<AirtableData, 'Name' | 'Twitter' | 'Facebook' | 'Instagram' | 'Link' | 'Image'>> } }> } };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesJoinJoinTsx3124867692QueryVariables = Exact<{
  contentSlugs: Maybe<ReadonlyArray<Scalars['String']> | Scalars['String']>;
}>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesJoinJoinTsx3124867692Query = { readonly allGhostPage: GhostPageFieldsFragment };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesPageTsx811223386QueryVariables = Exact<{
  slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesPageTsx811223386Query = { readonly allGhostPage: GhostPageFieldsFragment };

type GhostPostFieldsFragment = { readonly edges: ReadonlyArray<{ readonly node: (
      Pick<GhostPost, 'title' | 'slug' | 'feature_image' | 'excerpt' | 'html' | 'meta_description' | 'meta_title' | 'og_description' | 'og_image' | 'og_title' | 'published_at' | 'twitter_description' | 'twitter_image' | 'twitter_title'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<GhostTag, 'slug'>>>> }
    ) }> };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesPostTsx57463910QueryVariables = Exact<{
  slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesPostTsx57463910Query = { readonly allGhostPost: GhostPostFieldsFragment };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesNewsTsx2980874338QueryVariables = Exact<{
  slugs: Maybe<ReadonlyArray<Scalars['String']> | Scalars['String']>;
}>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesNewsTsx2980874338Query = { readonly allGhostPost: GhostPostFieldsFragment };

type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesIndexTsx1494857561QueryVariables = Exact<{
  featuredSlug: Maybe<ReadonlyArray<Scalars['String']> | Scalars['String']>;
  recentStorySlugs: Maybe<ReadonlyArray<Scalars['String']> | Scalars['String']>;
  campaignSlugs: Maybe<ReadonlyArray<Scalars['String']> | Scalars['String']>;
  heroCtaSlugs: Maybe<ReadonlyArray<Scalars['String']> | Scalars['String']>;
}>;


type usersguymacdeviwgbiwgbOrgUkV3SrctemplatesIndexTsx1494857561Query = { readonly featured: GhostPostFieldsFragment, readonly recentStories: GhostPostFieldsFragment, readonly campaigns: GhostPageFieldsFragment, readonly heroCtas: GhostPostFieldsFragment };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly allGhostPost: GhostPostSummariesFragment };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_5_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_6_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_7_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_8_Query = { readonly allGhostPost: GhostPostFieldsFragment };

type Unnamed_9_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_9_Query = { readonly allGhostPage: GhostPageTitlesFragment };

type GhostPageTitlesFragment = { readonly edges: ReadonlyArray<{ readonly node: (
      Pick<GhostPage, 'title' | 'slug'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<GhostTag, 'slug'>>>> }
    ) }> };

type GhostPostSummariesFragment = { readonly edges: ReadonlyArray<{ readonly node: (
      Pick<GhostPost, 'title' | 'slug' | 'feature_image' | 'published_at'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<GhostTag, 'slug'>>>> }
    ) }> };

}
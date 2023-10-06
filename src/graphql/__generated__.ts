import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CycleCommissionLeftSidebarDynamicZoneInput: { input: any; output: any; }
  CycleCommissionPageComponentsDynamicZoneInput: { input: any; output: any; }
  CycleCommissionRightSidebarDynamicZoneInput: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageLeftSidebarDynamicZoneInput: { input: any; output: any; }
  PagePageComponentsDynamicZoneInput: { input: any; output: any; }
  PageRightSidebarDynamicZoneInput: { input: any; output: any; }
  SubdivisionLeftSidebarDynamicZoneInput: { input: any; output: any; }
  SubdivisionPageComponentsDynamicZoneInput: { input: any; output: any; }
  SubdivisionRightSidebarDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
  VidilenyaLeftSidebarDynamicZoneInput: { input: any; output: any; }
  VidilenyaPageComponentsDynamicZoneInput: { input: any; output: any; }
  VidilenyaRightSidebarDynamicZoneInput: { input: any; output: any; }
};

export type Advertisement = {
  readonly __typename?: 'Advertisement';
  readonly body: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type AdvertisementEntity = {
  readonly __typename?: 'AdvertisementEntity';
  readonly attributes: Maybe<Advertisement>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type AdvertisementEntityResponse = {
  readonly __typename?: 'AdvertisementEntityResponse';
  readonly data: Maybe<AdvertisementEntity>;
};

export type AdvertisementEntityResponseCollection = {
  readonly __typename?: 'AdvertisementEntityResponseCollection';
  readonly data: ReadonlyArray<AdvertisementEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type AdvertisementFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<AdvertisementFiltersInput>>>;
  readonly body: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<AdvertisementFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<AdvertisementFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type AdvertisementInput = {
  readonly body: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeaderHeader = {
  readonly __typename?: 'ComponentHeaderHeader';
  readonly background: UploadFileEntityResponse;
  readonly headerIcons: Maybe<ReadonlyArray<Maybe<ComponentUiIconButton>>>;
  readonly id: Scalars['ID']['output'];
  readonly logo: UploadFileEntityResponse;
  readonly navigation: Maybe<ReadonlyArray<Maybe<ComponentHeaderSubmenu1>>>;
  readonly primaryVideoPoster: Maybe<UploadFileEntityResponse>;
  readonly secondaryVideoPoster: Maybe<UploadFileEntityResponse>;
  readonly social: Maybe<ComponentUiSocial>;
  readonly title: Scalars['String']['output'];
};


export type ComponentHeaderHeaderHeaderIconsArgs = {
  filters: InputMaybe<ComponentUiIconButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentHeaderHeaderNavigationArgs = {
  filters: InputMaybe<ComponentHeaderSubmenu1FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderHeaderInput = {
  readonly background: InputMaybe<Scalars['ID']['input']>;
  readonly headerIcons: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonInput>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly logo: InputMaybe<Scalars['ID']['input']>;
  readonly navigation: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu1Input>>>;
  readonly primaryVideoPoster: InputMaybe<Scalars['ID']['input']>;
  readonly secondaryVideoPoster: InputMaybe<Scalars['ID']['input']>;
  readonly social: InputMaybe<ComponentUiSocialInput>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSubmenu1 = {
  readonly __typename?: 'ComponentHeaderSubmenu1';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly submenu: Maybe<ReadonlyArray<Maybe<ComponentHeaderSubmenu2>>>;
  readonly text: Scalars['String']['output'];
};


export type ComponentHeaderSubmenu1SubmenuArgs = {
  filters: InputMaybe<ComponentHeaderSubmenu2FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderSubmenu1FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu1FiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentHeaderSubmenu1FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu1FiltersInput>>>;
  readonly submenu: InputMaybe<ComponentHeaderSubmenu2FiltersInput>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSubmenu1Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly submenu: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu2Input>>>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSubmenu2 = {
  readonly __typename?: 'ComponentHeaderSubmenu2';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly submenu: Maybe<ReadonlyArray<Maybe<ComponentHeaderSubmenu3>>>;
  readonly text: Scalars['String']['output'];
};


export type ComponentHeaderSubmenu2SubmenuArgs = {
  filters: InputMaybe<ComponentHeaderSubmenu3FiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderSubmenu2FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu2FiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentHeaderSubmenu2FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu2FiltersInput>>>;
  readonly submenu: InputMaybe<ComponentHeaderSubmenu3FiltersInput>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSubmenu2Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly submenu: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu3Input>>>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSubmenu3 = {
  readonly __typename?: 'ComponentHeaderSubmenu3';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type ComponentHeaderSubmenu3FiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu3FiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentHeaderSubmenu3FiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentHeaderSubmenu3FiltersInput>>>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSubmenu3Input = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPageBlocksAccordion = {
  readonly __typename?: 'ComponentPageBlocksAccordion';
  readonly body: Scalars['String']['output'];
  readonly component_type: Scalars['String']['output'];
  readonly default_open: Scalars['Boolean']['output'];
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentPageBlocksBody = {
  readonly __typename?: 'ComponentPageBlocksBody';
  readonly body: Scalars['String']['output'];
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ComponentPageBlocksButtonImage = {
  readonly __typename?: 'ComponentPageBlocksButtonImage';
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFileEntityResponse;
  readonly link: Scalars['String']['output'];
};

export type ComponentPageBlocksButtonImageFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentPageBlocksButtonImageFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentPageBlocksButtonImageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentPageBlocksButtonImageFiltersInput>>>;
};

export type ComponentPageBlocksButtonImages = {
  readonly __typename?: 'ComponentPageBlocksButtonImages';
  readonly Components: ReadonlyArray<Maybe<ComponentPageBlocksButtonImage>>;
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};


export type ComponentPageBlocksButtonImagesComponentsArgs = {
  filters: InputMaybe<ComponentPageBlocksButtonImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPageBlocksButtonLink = {
  readonly __typename?: 'ComponentPageBlocksButtonLink';
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type ComponentPageBlocksEducationBooks = {
  readonly __typename?: 'ComponentPageBlocksEducationBooks';
  readonly authors: Maybe<ComponentPageBlocksAccordion>;
  readonly component_type: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly main_photo: UploadFileEntityResponse;
};

export type ComponentPageBlocksFullSizePerson = {
  readonly __typename?: 'ComponentPageBlocksFullSizePerson';
  readonly body: Scalars['String']['output'];
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly photo: UploadFileEntityResponse;
};

export type ComponentPageBlocksPageCard = {
  readonly __typename?: 'ComponentPageBlocksPageCard';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly photo: UploadFileEntityResponse;
};

export type ComponentPageBlocksPageCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentPageBlocksPageCardFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentPageBlocksPageCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentPageBlocksPageCardFiltersInput>>>;
};

export type ComponentPageBlocksPageCards = {
  readonly __typename?: 'ComponentPageBlocksPageCards';
  readonly cards: Maybe<ReadonlyArray<Maybe<ComponentPageBlocksPageCard>>>;
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};


export type ComponentPageBlocksPageCardsCardsArgs = {
  filters: InputMaybe<ComponentPageBlocksPageCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPageBlocksPanorams = {
  readonly __typename?: 'ComponentPageBlocksPanorams';
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly panoramas: Maybe<PanoramaRelationResponseCollection>;
  readonly title: Scalars['String']['output'];
  readonly withBackground: Scalars['Boolean']['output'];
};


export type ComponentPageBlocksPanoramsPanoramasArgs = {
  filters: InputMaybe<PanoramaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPageBlocksPartner = {
  readonly __typename?: 'ComponentPageBlocksPartner';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly partner_category: Enum_Componentpageblockspartner_Partner_Category;
  readonly partner_link: Scalars['String']['output'];
  readonly partner_presentation_link: Maybe<Scalars['String']['output']>;
};

export type ComponentPageBlocksPartnersBlock = {
  readonly __typename?: 'ComponentPageBlocksPartnersBlock';
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly partners: Maybe<PartnerRelationResponseCollection>;
  readonly title: Scalars['String']['output'];
};


export type ComponentPageBlocksPartnersBlockPartnersArgs = {
  filters: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPageBlocksPerson = {
  readonly __typename?: 'ComponentPageBlocksPerson';
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly worker: Maybe<WorkerEntityResponse>;
};

export type ComponentPageBlocksPhotosGallery = {
  readonly __typename?: 'ComponentPageBlocksPhotosGallery';
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly images: UploadFileRelationResponseCollection;
  readonly title: Scalars['String']['output'];
};


export type ComponentPageBlocksPhotosGalleryImagesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPageBlocksTwoColumnWithImage = {
  readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage';
  readonly body: Scalars['String']['output'];
  readonly component_type: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFileEntityResponse;
  readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout;
};

export type ComponentPagesMeta = {
  readonly __typename?: 'ComponentPagesMeta';
  readonly content: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
};

export type ComponentPagesMetaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaFiltersInput>>>;
  readonly content: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentPagesMetaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaFiltersInput>>>;
};

export type ComponentPagesMetaInput = {
  readonly content: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPagesSeo = {
  readonly __typename?: 'ComponentPagesSeo';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly meta: Maybe<ReadonlyArray<Maybe<ComponentPagesMeta>>>;
  readonly title: Scalars['String']['output'];
};


export type ComponentPagesSeoMetaArgs = {
  filters: InputMaybe<ComponentPagesMetaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentPagesSeoFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesSeoFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly meta: InputMaybe<ComponentPagesMetaFiltersInput>;
  readonly not: InputMaybe<ComponentPagesSeoFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesSeoFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentPagesSeoInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly meta: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiFooterSocial = {
  readonly __typename?: 'ComponentUiFooterSocial';
  readonly icon: UploadFileEntityResponse;
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
};

export type ComponentUiFooterSocialFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFooterSocialFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiFooterSocialFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFooterSocialFiltersInput>>>;
};

export type ComponentUiFooterSocialInput = {
  readonly icon: InputMaybe<Scalars['ID']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiHomePageContactItem = {
  readonly __typename?: 'ComponentUiHomePageContactItem';
  readonly email: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly position: Scalars['String']['output'];
};

export type ComponentUiHomePageContactItemFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageContactItemFiltersInput>>>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiHomePageContactItemFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageContactItemFiltersInput>>>;
  readonly phone: InputMaybe<StringFilterInput>;
  readonly position: InputMaybe<StringFilterInput>;
};

export type ComponentUiHomePageContactItemInput = {
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly position: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiHomePageGalleryItem = {
  readonly __typename?: 'ComponentUiHomePageGalleryItem';
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly photo: UploadFileEntityResponse;
  readonly title: Scalars['String']['output'];
};

export type ComponentUiHomePageGalleryItemFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageGalleryItemFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiHomePageGalleryItemFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageGalleryItemFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiHomePageGalleryItemInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly photo: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiHomePageStat = {
  readonly __typename?: 'ComponentUiHomePageStat';
  readonly id: Scalars['ID']['output'];
  readonly num: Scalars['String']['output'];
  readonly text: Scalars['String']['output'];
};

export type ComponentUiHomePageStatFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageStatFiltersInput>>>;
  readonly not: InputMaybe<ComponentUiHomePageStatFiltersInput>;
  readonly num: InputMaybe<StringFilterInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageStatFiltersInput>>>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentUiHomePageStatInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly num: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiIconButton = {
  readonly __typename?: 'ComponentUiIconButton';
  readonly icon: UploadFileEntityResponse;
  readonly id: Scalars['ID']['output'];
  readonly link: Scalars['String']['output'];
  readonly text: Maybe<Scalars['String']['output']>;
};

export type ComponentUiIconButtonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonFiltersInput>>>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiIconButtonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonFiltersInput>>>;
  readonly text: InputMaybe<StringFilterInput>;
};

export type ComponentUiIconButtonInput = {
  readonly icon: InputMaybe<Scalars['ID']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiSocial = {
  readonly __typename?: 'ComponentUiSocial';
  readonly icons: ReadonlyArray<Maybe<ComponentUiIconButton>>;
  readonly id: Scalars['ID']['output'];
  readonly text: Maybe<Scalars['String']['output']>;
};


export type ComponentUiSocialIconsArgs = {
  filters: InputMaybe<ComponentUiIconButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiSocialInput = {
  readonly icons: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiIconButtonInput>>>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly text: InputMaybe<Scalars['String']['input']>;
};

export type CycleCommission = {
  readonly __typename?: 'CycleCommission';
  readonly SEO: Maybe<ComponentPagesSeo>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly headOfCommission: Maybe<WorkerEntityResponse>;
  readonly layout: Enum_Cyclecommission_Layout;
  readonly left_sidebar: Maybe<ReadonlyArray<Maybe<CycleCommissionLeftSidebarDynamicZone>>>;
  readonly main_photo: UploadFileRelationResponseCollection;
  readonly name: Scalars['String']['output'];
  readonly page_components: Maybe<ReadonlyArray<Maybe<CycleCommissionPageComponentsDynamicZone>>>;
  readonly page_url: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly right_sidebar: Maybe<ReadonlyArray<Maybe<CycleCommissionRightSidebarDynamicZone>>>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly workers: Maybe<WorkerRelationResponseCollection>;
};


export type CycleCommissionMain_PhotoArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type CycleCommissionWorkersArgs = {
  filters: InputMaybe<WorkerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type CycleCommissionEntity = {
  readonly __typename?: 'CycleCommissionEntity';
  readonly attributes: Maybe<CycleCommission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type CycleCommissionEntityResponse = {
  readonly __typename?: 'CycleCommissionEntityResponse';
  readonly data: Maybe<CycleCommissionEntity>;
};

export type CycleCommissionEntityResponseCollection = {
  readonly __typename?: 'CycleCommissionEntityResponseCollection';
  readonly data: ReadonlyArray<CycleCommissionEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type CycleCommissionFiltersInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<CycleCommissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly headOfCommission: InputMaybe<WorkerFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly layout: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<CycleCommissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<CycleCommissionFiltersInput>>>;
  readonly page_url: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly workers: InputMaybe<WorkerFiltersInput>;
};

export type CycleCommissionInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoInput>;
  readonly headOfCommission: InputMaybe<Scalars['ID']['input']>;
  readonly layout: InputMaybe<Enum_Cyclecommission_Layout>;
  readonly left_sidebar: InputMaybe<ReadonlyArray<Scalars['CycleCommissionLeftSidebarDynamicZoneInput']['input']>>;
  readonly main_photo: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly page_components: InputMaybe<ReadonlyArray<Scalars['CycleCommissionPageComponentsDynamicZoneInput']['input']>>;
  readonly page_url: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly right_sidebar: InputMaybe<ReadonlyArray<Scalars['CycleCommissionRightSidebarDynamicZoneInput']['input']>>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly workers: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type CycleCommissionLeftSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type CycleCommissionPageComponentsDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type CycleCommissionRightSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type DateFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly contains: InputMaybe<Scalars['Date']['input']>;
  readonly containsi: InputMaybe<Scalars['Date']['input']>;
  readonly endsWith: InputMaybe<Scalars['Date']['input']>;
  readonly eq: InputMaybe<Scalars['Date']['input']>;
  readonly eqi: InputMaybe<Scalars['Date']['input']>;
  readonly gt: InputMaybe<Scalars['Date']['input']>;
  readonly gte: InputMaybe<Scalars['Date']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt: InputMaybe<Scalars['Date']['input']>;
  readonly lte: InputMaybe<Scalars['Date']['input']>;
  readonly ne: InputMaybe<Scalars['Date']['input']>;
  readonly nei: InputMaybe<Scalars['Date']['input']>;
  readonly not: InputMaybe<DateFilterInput>;
  readonly notContains: InputMaybe<Scalars['Date']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Date']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentpageblockspartner_Partner_Category {
  Apteka = 'Apteka',
  NavchalnijZaklad = 'Navchalnij_zaklad',
  Ustanova = 'Ustanova'
}

export enum Enum_Componentpageblockstwocolumnwithimage_Layout {
  ImageText = 'image_text',
  TextImage = 'text_image'
}

export enum Enum_Cyclecommission_Layout {
  Col_1_8_3 = 'col_1_8_3',
  Col_2_7_3 = 'col_2_7_3',
  Col_8_4 = 'col_8_4',
  Col_9_3 = 'col_9_3',
  Col_12 = 'col_12'
}

export enum Enum_Group_Course_Number {
  Kurs_1 = 'kurs_1',
  Kurs_2 = 'kurs_2',
  Kurs_3 = 'kurs_3'
}

export enum Enum_Group_Educationaldegree {
  OpsFahovijMolodshijBakalavr = 'OPS_Fahovij_molodshij_bakalavr',
  OpsFahovijMolodshijBakalavrNaBazi_9Klasiv = 'OPS_Fahovij_molodshij_bakalavr_na_bazi_9_klasiv',
  OpsFahovijMolodshijBakalavrNaBazi_11Klasiv = 'OPS_Fahovij_molodshij_bakalavr_na_bazi_11_klasiv',
  OrPershijBakalavrskij = 'OR_pershij_bakalavrskij'
}

export enum Enum_Group_Specialty {
  FarmacziyaPromislovaFarmacziya_226 = 'Farmacziya_promislova_farmacziya_226',
  TehnologiyiMedichnoyiDiagnostikiTaLikuvannya_224 = 'Tehnologiyi_medichnoyi_diagnostiki_ta_likuvannya_224'
}

export enum Enum_Page_Layout {
  Col_1_8_3 = 'col_1_8_3',
  Col_2_7_3 = 'col_2_7_3',
  Col_2_8_2 = 'col_2_8_2',
  Col_8_4 = 'col_8_4',
  Col_9_3 = 'col_9_3',
  Col_12 = 'col_12'
}

export enum Enum_Partner_Type {
  EducationalInstitution = 'Educational_institution',
  Establishment = 'Establishment',
  Other = 'Other',
  Pharmacy = 'Pharmacy'
}

export enum Enum_Subdivision_Layout {
  Col_1_8_3 = 'col_1_8_3',
  Col_2_7_3 = 'col_2_7_3',
  Col_8_4 = 'col_8_4',
  Col_9_3 = 'col_9_3',
  Col_12 = 'col_12'
}

export enum Enum_Vidilenya_Layout {
  Col_1_8_3 = 'col_1_8_3',
  Col_2_7_3 = 'col_2_7_3',
  Col_8_4 = 'col_8_4',
  Col_9_3 = 'col_9_3',
  Col_12 = 'col_12'
}

export enum Enum_Worker_Category {
  Staff = 'staff',
  Teacher = 'teacher'
}

export enum Enum_Worker_Subdivision {
  Biblioteka = 'Biblioteka',
  Buhgalteriya = 'Buhgalteriya',
  CzivilnijZahist = 'Czivilnij_zahist',
  MonitoringYakostiOsviti = 'Monitoring_yakosti_osviti',
  MuzejKoledzhu = 'Muzej_koledzhu',
  NavchalnijViddil = 'Navchalnij_viddil',
  PervinnaProfspilkovaOrganizacziyaSpivrobitnikiv = 'Pervinna_profspilkova_organizacziya_spivrobitnikiv',
  PsihologichnaSluzhba = 'Psihologichna_sluzhba',
  VihovnaRobota = 'Vihovna_robota',
  ZapobigannyaBulingu = 'Zapobigannya_bulingu'
}

export type Error = {
  readonly __typename?: 'Error';
  readonly code: Scalars['String']['output'];
  readonly message: Maybe<Scalars['String']['output']>;
};

export type Event = {
  readonly __typename?: 'Event';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly date: Scalars['Date']['output'];
  readonly image: UploadFileEntityResponse;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly weight: Scalars['Int']['output'];
};

export type EventEntity = {
  readonly __typename?: 'EventEntity';
  readonly attributes: Maybe<Event>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type EventEntityResponse = {
  readonly __typename?: 'EventEntityResponse';
  readonly data: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  readonly __typename?: 'EventEntityResponseCollection';
  readonly data: ReadonlyArray<EventEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<EventFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly date: InputMaybe<DateFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<EventFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<EventFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly weight: InputMaybe<IntFilterInput>;
};

export type EventInput = {
  readonly date: InputMaybe<Scalars['Date']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly weight: InputMaybe<Scalars['Int']['input']>;
};

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = {
  readonly __typename?: 'Footer';
  readonly address: Scalars['String']['output'];
  readonly copyright: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly logo: UploadFileEntityResponse;
  readonly main_phone: Scalars['String']['output'];
  readonly map_photo: UploadFileEntityResponse;
  readonly map_url: Scalars['String']['output'];
  readonly secondary_phone: Maybe<Scalars['String']['output']>;
  readonly social: ReadonlyArray<Maybe<ComponentUiFooterSocial>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type FooterSocialArgs = {
  filters: InputMaybe<ComponentUiFooterSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterEntity = {
  readonly __typename?: 'FooterEntity';
  readonly attributes: Maybe<Footer>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type FooterEntityResponse = {
  readonly __typename?: 'FooterEntityResponse';
  readonly data: Maybe<FooterEntity>;
};

export type FooterInput = {
  readonly address: InputMaybe<Scalars['String']['input']>;
  readonly copyright: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly logo: InputMaybe<Scalars['ID']['input']>;
  readonly main_phone: InputMaybe<Scalars['String']['input']>;
  readonly map_photo: InputMaybe<Scalars['ID']['input']>;
  readonly map_url: InputMaybe<Scalars['String']['input']>;
  readonly secondary_phone: InputMaybe<Scalars['String']['input']>;
  readonly social: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFooterSocialInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type GenericMorph = Advertisement | ComponentHeaderHeader | ComponentHeaderSubmenu1 | ComponentHeaderSubmenu2 | ComponentHeaderSubmenu3 | ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImage | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksFullSizePerson | ComponentPageBlocksPageCard | ComponentPageBlocksPageCards | ComponentPageBlocksPanorams | ComponentPageBlocksPartner | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | ComponentPagesMeta | ComponentPagesSeo | ComponentUiFooterSocial | ComponentUiHomePageContactItem | ComponentUiHomePageGalleryItem | ComponentUiHomePageStat | ComponentUiIconButton | ComponentUiSocial | CycleCommission | Event | Footer | Group | Header | HomePageAbout | HomePageContact | HomePageGallery | HomePageStat | I18NLocale | Lesson | NewsTag | Novina | Page | Panorama | Partner | Seo | Subdivision | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Video | Vidilenya | Worker;

export type Group = {
  readonly __typename?: 'Group';
  readonly calendar_id: Maybe<Scalars['String']['output']>;
  readonly course_number: Enum_Group_Course_Number;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly educationalDegree: Enum_Group_Educationaldegree;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly specialty: Enum_Group_Specialty;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly vidilenya: Maybe<VidilenyaEntityResponse>;
};

export type GroupEntity = {
  readonly __typename?: 'GroupEntity';
  readonly attributes: Maybe<Group>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type GroupEntityResponse = {
  readonly __typename?: 'GroupEntityResponse';
  readonly data: Maybe<GroupEntity>;
};

export type GroupEntityResponseCollection = {
  readonly __typename?: 'GroupEntityResponseCollection';
  readonly data: ReadonlyArray<GroupEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type GroupFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<GroupFiltersInput>>>;
  readonly calendar_id: InputMaybe<StringFilterInput>;
  readonly course_number: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly educationalDegree: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<GroupFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<GroupFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly specialty: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly vidilenya: InputMaybe<VidilenyaFiltersInput>;
};

export type GroupInput = {
  readonly calendar_id: InputMaybe<Scalars['String']['input']>;
  readonly course_number: InputMaybe<Enum_Group_Course_Number>;
  readonly educationalDegree: InputMaybe<Enum_Group_Educationaldegree>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly specialty: InputMaybe<Enum_Group_Specialty>;
  readonly vidilenya: InputMaybe<Scalars['ID']['input']>;
};

export type Header = {
  readonly __typename?: 'Header';
  readonly Header: Maybe<ComponentHeaderHeader>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HeaderEntity = {
  readonly __typename?: 'HeaderEntity';
  readonly attributes: Maybe<Header>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HeaderEntityResponse = {
  readonly __typename?: 'HeaderEntityResponse';
  readonly data: Maybe<HeaderEntity>;
};

export type HeaderInput = {
  readonly Header: InputMaybe<ComponentHeaderHeaderInput>;
};

export type HomePageAbout = {
  readonly __typename?: 'HomePageAbout';
  readonly body: Scalars['String']['output'];
  readonly buttonText: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly photo: UploadFileEntityResponse;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageAboutEntity = {
  readonly __typename?: 'HomePageAboutEntity';
  readonly attributes: Maybe<HomePageAbout>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageAboutEntityResponse = {
  readonly __typename?: 'HomePageAboutEntityResponse';
  readonly data: Maybe<HomePageAboutEntity>;
};

export type HomePageAboutInput = {
  readonly body: InputMaybe<Scalars['String']['input']>;
  readonly buttonText: InputMaybe<Scalars['String']['input']>;
  readonly photo: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type HomePageContact = {
  readonly __typename?: 'HomePageContact';
  readonly Contacts: ReadonlyArray<Maybe<ComponentUiHomePageContactItem>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly frame_url: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageContactContactsArgs = {
  filters: InputMaybe<ComponentUiHomePageContactItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageContactEntity = {
  readonly __typename?: 'HomePageContactEntity';
  readonly attributes: Maybe<HomePageContact>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageContactEntityResponse = {
  readonly __typename?: 'HomePageContactEntityResponse';
  readonly data: Maybe<HomePageContactEntity>;
};

export type HomePageContactInput = {
  readonly Contacts: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageContactItemInput>>>;
  readonly frame_url: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type HomePageGallery = {
  readonly __typename?: 'HomePageGallery';
  readonly GalleryItems: ReadonlyArray<Maybe<ComponentUiHomePageGalleryItem>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageGalleryGalleryItemsArgs = {
  filters: InputMaybe<ComponentUiHomePageGalleryItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageGalleryEntity = {
  readonly __typename?: 'HomePageGalleryEntity';
  readonly attributes: Maybe<HomePageGallery>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageGalleryEntityResponse = {
  readonly __typename?: 'HomePageGalleryEntityResponse';
  readonly data: Maybe<HomePageGalleryEntity>;
};

export type HomePageGalleryInput = {
  readonly GalleryItems: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageGalleryItemInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type HomePageStat = {
  readonly __typename?: 'HomePageStat';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly stats: ReadonlyArray<Maybe<ComponentUiHomePageStat>>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageStatStatsArgs = {
  filters: InputMaybe<ComponentUiHomePageStatFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageStatEntity = {
  readonly __typename?: 'HomePageStatEntity';
  readonly attributes: Maybe<HomePageStat>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type HomePageStatEntityResponse = {
  readonly __typename?: 'HomePageStatEntityResponse';
  readonly data: Maybe<HomePageStatEntity>;
};

export type HomePageStatInput = {
  readonly stats: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiHomePageStatInput>>>;
};

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type Lesson = {
  readonly __typename?: 'Lesson';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type LessonEntity = {
  readonly __typename?: 'LessonEntity';
  readonly attributes: Maybe<Lesson>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LessonEntityResponse = {
  readonly __typename?: 'LessonEntityResponse';
  readonly data: Maybe<LessonEntity>;
};

export type LessonEntityResponseCollection = {
  readonly __typename?: 'LessonEntityResponseCollection';
  readonly data: ReadonlyArray<LessonEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LessonFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LessonFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<LessonFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LessonFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LessonInput = {
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type LessonRelationResponseCollection = {
  readonly __typename?: 'LessonRelationResponseCollection';
  readonly data: ReadonlyArray<LessonEntity>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createAdvertisement: Maybe<AdvertisementEntityResponse>;
  readonly createCycleCommission: Maybe<CycleCommissionEntityResponse>;
  readonly createEvent: Maybe<EventEntityResponse>;
  readonly createGroup: Maybe<GroupEntityResponse>;
  readonly createLesson: Maybe<LessonEntityResponse>;
  readonly createNewsTag: Maybe<NewsTagEntityResponse>;
  readonly createNovina: Maybe<NovinaEntityResponse>;
  readonly createPage: Maybe<PageEntityResponse>;
  readonly createPanorama: Maybe<PanoramaEntityResponse>;
  readonly createPartner: Maybe<PartnerEntityResponse>;
  readonly createSubdivision: Maybe<SubdivisionEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly createVideo: Maybe<VideoEntityResponse>;
  readonly createVidilenya: Maybe<VidilenyaEntityResponse>;
  readonly createWorker: Maybe<WorkerEntityResponse>;
  readonly deleteAdvertisement: Maybe<AdvertisementEntityResponse>;
  readonly deleteCycleCommission: Maybe<CycleCommissionEntityResponse>;
  readonly deleteEvent: Maybe<EventEntityResponse>;
  readonly deleteFooter: Maybe<FooterEntityResponse>;
  readonly deleteGroup: Maybe<GroupEntityResponse>;
  readonly deleteHeader: Maybe<HeaderEntityResponse>;
  readonly deleteHomePageAbout: Maybe<HomePageAboutEntityResponse>;
  readonly deleteHomePageContact: Maybe<HomePageContactEntityResponse>;
  readonly deleteHomePageGallery: Maybe<HomePageGalleryEntityResponse>;
  readonly deleteHomePageStat: Maybe<HomePageStatEntityResponse>;
  readonly deleteLesson: Maybe<LessonEntityResponse>;
  readonly deleteNewsTag: Maybe<NewsTagEntityResponse>;
  readonly deleteNovina: Maybe<NovinaEntityResponse>;
  readonly deletePage: Maybe<PageEntityResponse>;
  readonly deletePanorama: Maybe<PanoramaEntityResponse>;
  readonly deletePartner: Maybe<PartnerEntityResponse>;
  readonly deleteSeo: Maybe<SeoEntityResponse>;
  readonly deleteSubdivision: Maybe<SubdivisionEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteVideo: Maybe<VideoEntityResponse>;
  readonly deleteVidilenya: Maybe<VidilenyaEntityResponse>;
  readonly deleteWorker: Maybe<WorkerEntityResponse>;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateAdvertisement: Maybe<AdvertisementEntityResponse>;
  readonly updateCycleCommission: Maybe<CycleCommissionEntityResponse>;
  readonly updateEvent: Maybe<EventEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateFooter: Maybe<FooterEntityResponse>;
  readonly updateGroup: Maybe<GroupEntityResponse>;
  readonly updateHeader: Maybe<HeaderEntityResponse>;
  readonly updateHomePageAbout: Maybe<HomePageAboutEntityResponse>;
  readonly updateHomePageContact: Maybe<HomePageContactEntityResponse>;
  readonly updateHomePageGallery: Maybe<HomePageGalleryEntityResponse>;
  readonly updateHomePageStat: Maybe<HomePageStatEntityResponse>;
  readonly updateLesson: Maybe<LessonEntityResponse>;
  readonly updateNewsTag: Maybe<NewsTagEntityResponse>;
  readonly updateNovina: Maybe<NovinaEntityResponse>;
  readonly updatePage: Maybe<PageEntityResponse>;
  readonly updatePanorama: Maybe<PanoramaEntityResponse>;
  readonly updatePartner: Maybe<PartnerEntityResponse>;
  readonly updateSeo: Maybe<SeoEntityResponse>;
  readonly updateSubdivision: Maybe<SubdivisionEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly updateVideo: Maybe<VideoEntityResponse>;
  readonly updateVidilenya: Maybe<VidilenyaEntityResponse>;
  readonly updateWorker: Maybe<WorkerEntityResponse>;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAdvertisementArgs = {
  data: AdvertisementInput;
};


export type MutationCreateCycleCommissionArgs = {
  data: CycleCommissionInput;
};


export type MutationCreateEventArgs = {
  data: EventInput;
};


export type MutationCreateGroupArgs = {
  data: GroupInput;
};


export type MutationCreateLessonArgs = {
  data: LessonInput;
};


export type MutationCreateNewsTagArgs = {
  data: NewsTagInput;
};


export type MutationCreateNovinaArgs = {
  data: NovinaInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
};


export type MutationCreatePanoramaArgs = {
  data: PanoramaInput;
};


export type MutationCreatePartnerArgs = {
  data: PartnerInput;
};


export type MutationCreateSubdivisionArgs = {
  data: SubdivisionInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
};


export type MutationCreateVidilenyaArgs = {
  data: VidilenyaInput;
};


export type MutationCreateWorkerArgs = {
  data: WorkerInput;
};


export type MutationDeleteAdvertisementArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCycleCommissionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNewsTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNovinaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePanoramaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePartnerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSubdivisionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVidilenyaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAdvertisementArgs = {
  data: AdvertisementInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCycleCommissionArgs = {
  data: CycleCommissionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateGroupArgs = {
  data: GroupInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateHeaderArgs = {
  data: HeaderInput;
};


export type MutationUpdateHomePageAboutArgs = {
  data: HomePageAboutInput;
};


export type MutationUpdateHomePageContactArgs = {
  data: HomePageContactInput;
};


export type MutationUpdateHomePageGalleryArgs = {
  data: HomePageGalleryInput;
};


export type MutationUpdateHomePageStatArgs = {
  data: HomePageStatInput;
};


export type MutationUpdateLessonArgs = {
  data: LessonInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNewsTagArgs = {
  data: NewsTagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNovinaArgs = {
  data: NovinaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePanoramaArgs = {
  data: PanoramaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePartnerArgs = {
  data: PartnerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSeoArgs = {
  data: SeoInput;
};


export type MutationUpdateSubdivisionArgs = {
  data: SubdivisionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVideoArgs = {
  data: VideoInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVidilenyaArgs = {
  data: VidilenyaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkerArgs = {
  data: WorkerInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type NewsTag = {
  readonly __typename?: 'NewsTag';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type NewsTagEntity = {
  readonly __typename?: 'NewsTagEntity';
  readonly attributes: Maybe<NewsTag>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type NewsTagEntityResponse = {
  readonly __typename?: 'NewsTagEntityResponse';
  readonly data: Maybe<NewsTagEntity>;
};

export type NewsTagEntityResponseCollection = {
  readonly __typename?: 'NewsTagEntityResponseCollection';
  readonly data: ReadonlyArray<NewsTagEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type NewsTagFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<NewsTagFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<NewsTagFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<NewsTagFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type NewsTagInput = {
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type NewsTagRelationResponseCollection = {
  readonly __typename?: 'NewsTagRelationResponseCollection';
  readonly data: ReadonlyArray<NewsTagEntity>;
};

export type Novina = {
  readonly __typename?: 'Novina';
  readonly body: Maybe<Scalars['String']['output']>;
  readonly collage_photos: Maybe<UploadFileRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly date: Scalars['Date']['output'];
  readonly main_photo: UploadFileEntityResponse;
  readonly news_tags: Maybe<NewsTagRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video_url: Maybe<Scalars['String']['output']>;
};


export type NovinaCollage_PhotosArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type NovinaNews_TagsArgs = {
  filters: InputMaybe<NewsTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type NovinaEntity = {
  readonly __typename?: 'NovinaEntity';
  readonly attributes: Maybe<Novina>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type NovinaEntityResponse = {
  readonly __typename?: 'NovinaEntityResponse';
  readonly data: Maybe<NovinaEntity>;
};

export type NovinaEntityResponseCollection = {
  readonly __typename?: 'NovinaEntityResponseCollection';
  readonly data: ReadonlyArray<NovinaEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type NovinaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<NovinaFiltersInput>>>;
  readonly body: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly date: InputMaybe<DateFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly news_tags: InputMaybe<NewsTagFiltersInput>;
  readonly not: InputMaybe<NovinaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<NovinaFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly video_url: InputMaybe<StringFilterInput>;
};

export type NovinaInput = {
  readonly body: InputMaybe<Scalars['String']['input']>;
  readonly collage_photos: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly date: InputMaybe<Scalars['Date']['input']>;
  readonly main_photo: InputMaybe<Scalars['ID']['input']>;
  readonly news_tags: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly video_url: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  readonly __typename?: 'Page';
  readonly SEO: ComponentPagesSeo;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly layout: Enum_Page_Layout;
  readonly left_sidebar: Maybe<ReadonlyArray<Maybe<PageLeftSidebarDynamicZone>>>;
  readonly main_photo: Maybe<UploadFileEntityResponse>;
  readonly page_components: Maybe<ReadonlyArray<Maybe<PagePageComponentsDynamicZone>>>;
  readonly page_url: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly right_sidebar: Maybe<ReadonlyArray<Maybe<PageRightSidebarDynamicZone>>>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type PageEntity = {
  readonly __typename?: 'PageEntity';
  readonly attributes: Maybe<Page>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  readonly __typename?: 'PageEntityResponse';
  readonly data: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  readonly __typename?: 'PageEntityResponseCollection';
  readonly data: ReadonlyArray<PageEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PageFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly layout: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<PageFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PageFiltersInput>>>;
  readonly page_url: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoInput>;
  readonly layout: InputMaybe<Enum_Page_Layout>;
  readonly left_sidebar: InputMaybe<ReadonlyArray<Scalars['PageLeftSidebarDynamicZoneInput']['input']>>;
  readonly main_photo: InputMaybe<Scalars['ID']['input']>;
  readonly page_components: InputMaybe<ReadonlyArray<Scalars['PagePageComponentsDynamicZoneInput']['input']>>;
  readonly page_url: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly right_sidebar: InputMaybe<ReadonlyArray<Scalars['PageRightSidebarDynamicZoneInput']['input']>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type PageLeftSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksFullSizePerson | ComponentPageBlocksPageCards | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type PagePageComponentsDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksFullSizePerson | ComponentPageBlocksPageCards | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type PageRightSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksFullSizePerson | ComponentPageBlocksPageCards | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export type Panorama = {
  readonly __typename?: 'Panorama';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly link: Scalars['String']['output'];
  readonly poster: UploadFileEntityResponse;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly weight: Scalars['Int']['output'];
};

export type PanoramaEntity = {
  readonly __typename?: 'PanoramaEntity';
  readonly attributes: Maybe<Panorama>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PanoramaEntityResponse = {
  readonly __typename?: 'PanoramaEntityResponse';
  readonly data: Maybe<PanoramaEntity>;
};

export type PanoramaEntityResponseCollection = {
  readonly __typename?: 'PanoramaEntityResponseCollection';
  readonly data: ReadonlyArray<PanoramaEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PanoramaFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PanoramaFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<PanoramaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PanoramaFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly weight: InputMaybe<IntFilterInput>;
};

export type PanoramaInput = {
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly poster: InputMaybe<Scalars['ID']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly weight: InputMaybe<Scalars['Int']['input']>;
};

export type PanoramaRelationResponseCollection = {
  readonly __typename?: 'PanoramaRelationResponseCollection';
  readonly data: ReadonlyArray<PanoramaEntity>;
};

export type Partner = {
  readonly __typename?: 'Partner';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly link: Scalars['String']['output'];
  readonly logo: UploadFileEntityResponse;
  readonly name: Scalars['String']['output'];
  readonly presentation_link: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly type: Enum_Partner_Type;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly weight: Scalars['Int']['output'];
};

export type PartnerEntity = {
  readonly __typename?: 'PartnerEntity';
  readonly attributes: Maybe<Partner>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PartnerEntityResponse = {
  readonly __typename?: 'PartnerEntityResponse';
  readonly data: Maybe<PartnerEntity>;
};

export type PartnerEntityResponseCollection = {
  readonly __typename?: 'PartnerEntityResponseCollection';
  readonly data: ReadonlyArray<PartnerEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type PartnerFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<PartnerFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly link: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<PartnerFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<PartnerFiltersInput>>>;
  readonly presentation_link: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly weight: InputMaybe<IntFilterInput>;
};

export type PartnerInput = {
  readonly link: InputMaybe<Scalars['String']['input']>;
  readonly logo: InputMaybe<Scalars['ID']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly presentation_link: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly type: InputMaybe<Enum_Partner_Type>;
  readonly weight: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerRelationResponseCollection = {
  readonly __typename?: 'PartnerRelationResponseCollection';
  readonly data: ReadonlyArray<PartnerEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly advertisement: Maybe<AdvertisementEntityResponse>;
  readonly advertisements: Maybe<AdvertisementEntityResponseCollection>;
  readonly cycleCommission: Maybe<CycleCommissionEntityResponse>;
  readonly cycleCommissions: Maybe<CycleCommissionEntityResponseCollection>;
  readonly event: Maybe<EventEntityResponse>;
  readonly events: Maybe<EventEntityResponseCollection>;
  readonly footer: Maybe<FooterEntityResponse>;
  readonly group: Maybe<GroupEntityResponse>;
  readonly groups: Maybe<GroupEntityResponseCollection>;
  readonly header: Maybe<HeaderEntityResponse>;
  readonly homePageAbout: Maybe<HomePageAboutEntityResponse>;
  readonly homePageContact: Maybe<HomePageContactEntityResponse>;
  readonly homePageGallery: Maybe<HomePageGalleryEntityResponse>;
  readonly homePageStat: Maybe<HomePageStatEntityResponse>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly lesson: Maybe<LessonEntityResponse>;
  readonly lessons: Maybe<LessonEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly newsTag: Maybe<NewsTagEntityResponse>;
  readonly newsTags: Maybe<NewsTagEntityResponseCollection>;
  readonly novina: Maybe<NovinaEntityResponse>;
  readonly novinas: Maybe<NovinaEntityResponseCollection>;
  readonly page: Maybe<PageEntityResponse>;
  readonly pages: Maybe<PageEntityResponseCollection>;
  readonly panorama: Maybe<PanoramaEntityResponse>;
  readonly panoramas: Maybe<PanoramaEntityResponseCollection>;
  readonly partner: Maybe<PartnerEntityResponse>;
  readonly partners: Maybe<PartnerEntityResponseCollection>;
  readonly seo: Maybe<SeoEntityResponse>;
  readonly subdivision: Maybe<SubdivisionEntityResponse>;
  readonly subdivisions: Maybe<SubdivisionEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
  readonly video: Maybe<VideoEntityResponse>;
  readonly videos: Maybe<VideoEntityResponseCollection>;
  readonly vidilenya: Maybe<VidilenyaEntityResponse>;
  readonly vidilenyas: Maybe<VidilenyaEntityResponseCollection>;
  readonly worker: Maybe<WorkerEntityResponse>;
  readonly workers: Maybe<WorkerEntityResponseCollection>;
};


export type QueryAdvertisementArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAdvertisementsArgs = {
  filters: InputMaybe<AdvertisementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCycleCommissionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCycleCommissionsArgs = {
  filters: InputMaybe<CycleCommissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEventArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEventsArgs = {
  filters: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGroupArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroupsArgs = {
  filters: InputMaybe<GroupFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLessonArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLessonsArgs = {
  filters: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNewsTagArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNewsTagsArgs = {
  filters: InputMaybe<NewsTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNovinaArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNovinasArgs = {
  filters: InputMaybe<NovinaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPagesArgs = {
  filters: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPanoramaArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPanoramasArgs = {
  filters: InputMaybe<PanoramaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPartnerArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPartnersArgs = {
  filters: InputMaybe<PartnerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubdivisionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubdivisionsArgs = {
  filters: InputMaybe<SubdivisionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVideoArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVideosArgs = {
  filters: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVidilenyaArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVidilenyasArgs = {
  filters: InputMaybe<VidilenyaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkerArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWorkersArgs = {
  filters: InputMaybe<WorkerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type Seo = {
  readonly __typename?: 'Seo';
  readonly SEO: Maybe<ReadonlyArray<Maybe<ComponentPagesMeta>>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SeoSeoArgs = {
  filters: InputMaybe<ComponentPagesMetaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoEntity = {
  readonly __typename?: 'SeoEntity';
  readonly attributes: Maybe<Seo>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SeoEntityResponse = {
  readonly __typename?: 'SeoEntityResponse';
  readonly data: Maybe<SeoEntity>;
};

export type SeoInput = {
  readonly SEO: InputMaybe<ReadonlyArray<InputMaybe<ComponentPagesMetaInput>>>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  readonly __typename?: 'Subdivision';
  readonly SEO: ComponentPagesSeo;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly layout: Enum_Subdivision_Layout;
  readonly left_sidebar: Maybe<ReadonlyArray<Maybe<SubdivisionLeftSidebarDynamicZone>>>;
  readonly main_photo: UploadFileRelationResponseCollection;
  readonly name: Scalars['String']['output'];
  readonly page_components: Maybe<ReadonlyArray<Maybe<SubdivisionPageComponentsDynamicZone>>>;
  readonly page_url: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly right_sidebar: Maybe<ReadonlyArray<Maybe<SubdivisionRightSidebarDynamicZone>>>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SubdivisionMain_PhotoArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SubdivisionEntity = {
  readonly __typename?: 'SubdivisionEntity';
  readonly attributes: Maybe<Subdivision>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SubdivisionEntityResponse = {
  readonly __typename?: 'SubdivisionEntityResponse';
  readonly data: Maybe<SubdivisionEntity>;
};

export type SubdivisionEntityResponseCollection = {
  readonly __typename?: 'SubdivisionEntityResponseCollection';
  readonly data: ReadonlyArray<SubdivisionEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SubdivisionFiltersInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SubdivisionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly layout: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<SubdivisionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SubdivisionFiltersInput>>>;
  readonly page_url: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SubdivisionInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoInput>;
  readonly layout: InputMaybe<Enum_Subdivision_Layout>;
  readonly left_sidebar: InputMaybe<ReadonlyArray<Scalars['SubdivisionLeftSidebarDynamicZoneInput']['input']>>;
  readonly main_photo: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly page_components: InputMaybe<ReadonlyArray<Scalars['SubdivisionPageComponentsDynamicZoneInput']['input']>>;
  readonly page_url: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly right_sidebar: InputMaybe<ReadonlyArray<Scalars['SubdivisionRightSidebarDynamicZoneInput']['input']>>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

export type SubdivisionLeftSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type SubdivisionPageComponentsDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type SubdivisionRightSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type Video = {
  readonly __typename?: 'Video';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video_poster: UploadFileEntityResponse;
  readonly video_url: Scalars['String']['output'];
};

export type VideoEntity = {
  readonly __typename?: 'VideoEntity';
  readonly attributes: Maybe<Video>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type VideoEntityResponse = {
  readonly __typename?: 'VideoEntityResponse';
  readonly data: Maybe<VideoEntity>;
};

export type VideoEntityResponseCollection = {
  readonly __typename?: 'VideoEntityResponseCollection';
  readonly data: ReadonlyArray<VideoEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type VideoFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<VideoFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<VideoFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<VideoFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly video_url: InputMaybe<StringFilterInput>;
};

export type VideoInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly video_poster: InputMaybe<Scalars['ID']['input']>;
  readonly video_url: InputMaybe<Scalars['String']['input']>;
};

export type Vidilenya = {
  readonly __typename?: 'Vidilenya';
  readonly SEO: Maybe<ComponentPagesSeo>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly layout: Enum_Vidilenya_Layout;
  readonly left_sidebar: Maybe<ReadonlyArray<Maybe<VidilenyaLeftSidebarDynamicZone>>>;
  readonly main_photo: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly page_components: Maybe<ReadonlyArray<Maybe<VidilenyaPageComponentsDynamicZone>>>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly right_sidebar: Maybe<ReadonlyArray<Maybe<VidilenyaRightSidebarDynamicZone>>>;
  readonly slug: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type VidilenyaMain_PhotoArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type VidilenyaEntity = {
  readonly __typename?: 'VidilenyaEntity';
  readonly attributes: Maybe<Vidilenya>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type VidilenyaEntityResponse = {
  readonly __typename?: 'VidilenyaEntityResponse';
  readonly data: Maybe<VidilenyaEntity>;
};

export type VidilenyaEntityResponseCollection = {
  readonly __typename?: 'VidilenyaEntityResponseCollection';
  readonly data: ReadonlyArray<VidilenyaEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type VidilenyaFiltersInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<VidilenyaFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly layout: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<VidilenyaFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<VidilenyaFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type VidilenyaInput = {
  readonly SEO: InputMaybe<ComponentPagesSeoInput>;
  readonly layout: InputMaybe<Enum_Vidilenya_Layout>;
  readonly left_sidebar: InputMaybe<ReadonlyArray<Scalars['VidilenyaLeftSidebarDynamicZoneInput']['input']>>;
  readonly main_photo: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly page_components: InputMaybe<ReadonlyArray<Scalars['VidilenyaPageComponentsDynamicZoneInput']['input']>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly right_sidebar: InputMaybe<ReadonlyArray<Scalars['VidilenyaRightSidebarDynamicZoneInput']['input']>>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
};

export type VidilenyaLeftSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type VidilenyaPageComponentsDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type VidilenyaRightSidebarDynamicZone = ComponentPageBlocksAccordion | ComponentPageBlocksBody | ComponentPageBlocksButtonImages | ComponentPageBlocksButtonLink | ComponentPageBlocksEducationBooks | ComponentPageBlocksPanorams | ComponentPageBlocksPartnersBlock | ComponentPageBlocksPerson | ComponentPageBlocksPhotosGallery | ComponentPageBlocksTwoColumnWithImage | Error;

export type Worker = {
  readonly __typename?: 'Worker';
  readonly additional_information: Maybe<Scalars['String']['output']>;
  readonly calendar_id: Maybe<Scalars['String']['output']>;
  readonly category: Enum_Worker_Category;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly cycle_commission: Maybe<CycleCommissionEntityResponse>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly is_administration: Scalars['Boolean']['output'];
  readonly lessons: Maybe<LessonRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly photo: Maybe<UploadFileEntityResponse>;
  readonly position: Maybe<Scalars['String']['output']>;
  readonly printed_works: Maybe<Scalars['String']['output']>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly status: Scalars['String']['output'];
  readonly subdivision: Maybe<Enum_Worker_Subdivision>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly weight: Scalars['Int']['output'];
};


export type WorkerLessonsArgs = {
  filters: InputMaybe<LessonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkerEntity = {
  readonly __typename?: 'WorkerEntity';
  readonly attributes: Maybe<Worker>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type WorkerEntityResponse = {
  readonly __typename?: 'WorkerEntityResponse';
  readonly data: Maybe<WorkerEntity>;
};

export type WorkerEntityResponseCollection = {
  readonly __typename?: 'WorkerEntityResponseCollection';
  readonly data: ReadonlyArray<WorkerEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type WorkerFiltersInput = {
  readonly additional_information: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<WorkerFiltersInput>>>;
  readonly calendar_id: InputMaybe<StringFilterInput>;
  readonly category: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly cycle_commission: InputMaybe<CycleCommissionFiltersInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly is_administration: InputMaybe<BooleanFilterInput>;
  readonly lessons: InputMaybe<LessonFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<WorkerFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<WorkerFiltersInput>>>;
  readonly phone: InputMaybe<StringFilterInput>;
  readonly position: InputMaybe<StringFilterInput>;
  readonly printed_works: InputMaybe<StringFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly slug: InputMaybe<StringFilterInput>;
  readonly status: InputMaybe<StringFilterInput>;
  readonly subdivision: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly weight: InputMaybe<IntFilterInput>;
};

export type WorkerInput = {
  readonly additional_information: InputMaybe<Scalars['String']['input']>;
  readonly calendar_id: InputMaybe<Scalars['String']['input']>;
  readonly category: InputMaybe<Enum_Worker_Category>;
  readonly cycle_commission: InputMaybe<Scalars['ID']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly is_administration: InputMaybe<Scalars['Boolean']['input']>;
  readonly lessons: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly photo: InputMaybe<Scalars['ID']['input']>;
  readonly position: InputMaybe<Scalars['String']['input']>;
  readonly printed_works: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly slug: InputMaybe<Scalars['String']['input']>;
  readonly status: InputMaybe<Scalars['String']['input']>;
  readonly subdivision: InputMaybe<Enum_Worker_Subdivision>;
  readonly weight: InputMaybe<Scalars['Int']['input']>;
};

export type WorkerRelationResponseCollection = {
  readonly __typename?: 'WorkerRelationResponseCollection';
  readonly data: ReadonlyArray<WorkerEntity>;
};

export type GetNavigationFragment = { readonly __typename?: 'ComponentHeaderHeader', readonly navigation: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu1', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu2', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu3', readonly id: string, readonly text: string, readonly link: string }> }> }> };

export type GetHeaderIconsFragment = { readonly __typename?: 'ComponentHeaderHeader', readonly headerIcons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> };

export type GetHeaderSocialFragment = { readonly __typename?: 'ComponentHeaderHeader', readonly social: { readonly __typename?: 'ComponentUiSocial', readonly text: string, readonly icons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> } };

export type MediaFileFragmentFragment = { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } };

export type GetAccordionComponentFragment = { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string };

export type GetBodyComponentFragment = { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string };

export type GetButtonImagesComponentFragment = { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> };

export type GetButtonLinkComponentFragment = { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string };

export type GetEducationBooksComponentFragment = { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } };

export type GetBlocksPanoramsComponentFragment = { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } };

export type GetPartnersBlockComponentFragment = { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } };

export type GetPhotosGalleryComponentFragment = { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } };

export type GetTwoColumnWithImageComponentFragment = { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } };

export type GetBlocksPersonComponentFragment = { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } };

export type GetPageCardsComponentFragment = { readonly __typename?: 'ComponentPageBlocksPageCards', readonly id: string, readonly component_type: string, readonly cards: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksPageCard', readonly id: string, readonly name: string, readonly link: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> };

export type GetFullSizePersonComponentFragment = { readonly __typename?: 'ComponentPageBlocksFullSizePerson', readonly id: string, readonly component_type: string, readonly name: string, readonly body: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } };

export type GetAdministrationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdministrationQuery = { readonly __typename?: 'Query', readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly email: string, readonly phone: string, readonly position: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly lessons: { readonly __typename?: 'LessonRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'LessonEntity', readonly attributes: { readonly __typename?: 'Lesson', readonly name: string } }> }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly name: string, readonly slug: string } } } } }> } };

export type GetAdvertisementsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdvertisementsQuery = { readonly __typename?: 'Query', readonly advertisements: { readonly __typename?: 'AdvertisementEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'AdvertisementEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Advertisement', readonly title: string, readonly body: string } }> } };

export type GetAllCycleCommissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCycleCommissionsQuery = { readonly __typename?: 'Query', readonly cycleCommissions: { readonly __typename?: 'CycleCommissionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CycleCommissionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'CycleCommission', readonly name: string, readonly slug: string, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } }> } };

export type GetAllCycleCommissionsSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCycleCommissionsSlugQuery = { readonly __typename?: 'Query', readonly cycleCommissions: { readonly __typename?: 'CycleCommissionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CycleCommissionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } }> } };

export type GetAllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventsQuery = { readonly __typename?: 'Query', readonly events: { readonly __typename?: 'EventEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'EventEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Event', readonly title: string, readonly date: any, readonly weight: number, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } };

export type GetAllGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGroupsQuery = { readonly __typename?: 'Query', readonly groups: { readonly __typename?: 'GroupEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly specialty: Enum_Group_Specialty, readonly educationalDegree: Enum_Group_Educationaldegree, readonly course_number: Enum_Group_Course_Number, readonly vidilenya: { readonly __typename?: 'VidilenyaEntityResponse', readonly data: { readonly __typename?: 'VidilenyaEntity', readonly attributes: { readonly __typename?: 'Vidilenya', readonly name: string } } } } }> } };

export type GetAllNewsDatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsDatesQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Novina', readonly date: any } }> } };

export type GetAllPagesUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPagesUrlQuery = { readonly __typename?: 'Query', readonly pages: { readonly __typename?: 'PageEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PageEntity', readonly attributes: { readonly __typename?: 'Page', readonly page_url: string } }> } };

export type GetAllSubdivisionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSubdivisionQuery = { readonly __typename?: 'Query', readonly subdivisions: { readonly __typename?: 'SubdivisionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'SubdivisionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Subdivision', readonly name: string, readonly slug: string, readonly page_url: string, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } }> } };

export type GetAllSubdivisionSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSubdivisionSlugQuery = { readonly __typename?: 'Query', readonly subdivisions: { readonly __typename?: 'SubdivisionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'SubdivisionEntity', readonly attributes: { readonly __typename?: 'Subdivision', readonly slug: string } }> } };

export type GetAllTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeachersQuery = { readonly __typename?: 'Query', readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly slug: string } }> } };

export type GetAllTeachersWithCycleCommissionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeachersWithCycleCommissionQuery = { readonly __typename?: 'Query', readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly slug: string, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } }> } };

export type GetAllTeachersFullInfoQueryVariables = Exact<{
  cmkName?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllTeachersFullInfoQuery = { readonly __typename?: 'Query', readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly lessons: { readonly __typename?: 'LessonRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'LessonEntity', readonly attributes: { readonly __typename?: 'Lesson', readonly name: string } }> }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly name: string, readonly slug: string } } } } }> } };

export type GetAllVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVideosQuery = { readonly __typename?: 'Query', readonly videos: { readonly __typename?: 'VideoEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'VideoEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Video', readonly title: string, readonly video_url: string, readonly video_poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } };

export type GetAllVidilenyasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVidilenyasQuery = { readonly __typename?: 'Query', readonly vidilenyas: { readonly __typename?: 'VidilenyaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'VidilenyaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Vidilenya', readonly name: string, readonly slug: string, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } }> } };

export type GetAllVidilenyaSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllVidilenyaSlugQuery = { readonly __typename?: 'Query', readonly vidilenyas: { readonly __typename?: 'VidilenyaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'VidilenyaEntity', readonly attributes: { readonly __typename?: 'Vidilenya', readonly slug: string } }> } };

export type GetCycleCommissionQueryVariables = Exact<{
  pageUrl: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCycleCommissionQuery = { readonly __typename?: 'Query', readonly cycleCommissions: { readonly __typename?: 'CycleCommissionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CycleCommissionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'CycleCommission', readonly name: string, readonly slug: string, readonly page_url: string, readonly layout: Enum_Cyclecommission_Layout, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> }, readonly SEO: { readonly __typename?: 'ComponentPagesSeo', readonly title: string, readonly description: string, readonly meta: ReadonlyArray<{ readonly __typename?: 'ComponentPagesMeta', readonly id: string, readonly name: string, readonly content: string }> }, readonly headOfCommission: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly slug: string, readonly position: string, readonly phone: string, readonly email: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly page_components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly right_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly left_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly workers: { readonly __typename?: 'WorkerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly slug: string, readonly email: string, readonly phone: string, readonly position: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly lessons: { readonly __typename?: 'LessonRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'LessonEntity', readonly attributes: { readonly __typename?: 'Lesson', readonly name: string } }> } } }> } } }> } };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { readonly __typename?: 'Query', readonly footer: { readonly __typename?: 'FooterEntityResponse', readonly data: { readonly __typename?: 'FooterEntity', readonly attributes: { readonly __typename?: 'Footer', readonly copyright: string, readonly map_url: string, readonly title: string, readonly address: string, readonly main_phone: string, readonly secondary_phone: string, readonly email: string, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly map_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly social: ReadonlyArray<{ readonly __typename?: 'ComponentUiFooterSocial', readonly id: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }> } } } };

export type GetFullNewsQueryVariables = Exact<{
  newsId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetFullNewsQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly attributes: { readonly __typename?: 'Novina', readonly title: string, readonly body: string, readonly date: any, readonly video_url: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } }, readonly collage_photos: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } }> }, readonly news_tags: { readonly __typename?: 'NewsTagRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NewsTagEntity', readonly attributes: { readonly __typename?: 'NewsTag', readonly title: string } }> } } }> } };

export type GetGroupScheduleQueryVariables = Exact<{
  groupName: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGroupScheduleQuery = { readonly __typename?: 'Query', readonly groups: { readonly __typename?: 'GroupEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly calendar_id: string } }> } };

export type GetAllGroupScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGroupScheduleQuery = { readonly __typename?: 'Query', readonly groups: { readonly __typename?: 'GroupEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string, readonly calendar_id: string } }> } };

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { readonly __typename?: 'Query', readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly Header: { readonly __typename?: 'ComponentHeaderHeader', readonly navigation: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu1', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu2', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu3', readonly id: string, readonly text: string, readonly link: string }> }> }>, readonly headerIcons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }>, readonly social: { readonly __typename?: 'ComponentUiSocial', readonly text: string, readonly icons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> } } } } } };

export type GetHeaderScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderScheduleQuery = { readonly __typename?: 'Query', readonly groups: { readonly __typename?: 'GroupEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'GroupEntity', readonly attributes: { readonly __typename?: 'Group', readonly name: string } }> }, readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly slug: string } }> } };

export type GetHomePageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageDataQuery = { readonly __typename?: 'Query', readonly homePageAbout: { readonly __typename?: 'HomePageAboutEntityResponse', readonly data: { readonly __typename?: 'HomePageAboutEntity', readonly attributes: { readonly __typename?: 'HomePageAbout', readonly title: string, readonly body: string, readonly buttonText: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } }, readonly homePageStat: { readonly __typename?: 'HomePageStatEntityResponse', readonly data: { readonly __typename?: 'HomePageStatEntity', readonly attributes: { readonly __typename?: 'HomePageStat', readonly stats: ReadonlyArray<{ readonly __typename?: 'ComponentUiHomePageStat', readonly id: string, readonly text: string, readonly num: string }> } } }, readonly homePageGallery: { readonly __typename?: 'HomePageGalleryEntityResponse', readonly data: { readonly __typename?: 'HomePageGalleryEntity', readonly attributes: { readonly __typename?: 'HomePageGallery', readonly title: string, readonly GalleryItems: ReadonlyArray<{ readonly __typename?: 'ComponentUiHomePageGalleryItem', readonly id: string, readonly title: string, readonly link: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }> } } }, readonly homePageContact: { readonly __typename?: 'HomePageContactEntityResponse', readonly data: { readonly __typename?: 'HomePageContactEntity', readonly attributes: { readonly __typename?: 'HomePageContact', readonly title: string, readonly frame_url: string, readonly Contacts: ReadonlyArray<{ readonly __typename?: 'ComponentUiHomePageContactItem', readonly id: string, readonly name: string, readonly position: string, readonly phone: string, readonly email: string }> } } } };

export type GetHomePageAboutQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageAboutQuery = { readonly __typename?: 'Query', readonly homePageAbout: { readonly __typename?: 'HomePageAboutEntityResponse', readonly data: { readonly __typename?: 'HomePageAboutEntity', readonly attributes: { readonly __typename?: 'HomePageAbout', readonly title: string, readonly body: string, readonly buttonText: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } } } };

export type GetHomePageStatQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageStatQuery = { readonly __typename?: 'Query', readonly homePageStat: { readonly __typename?: 'HomePageStatEntityResponse', readonly data: { readonly __typename?: 'HomePageStatEntity', readonly attributes: { readonly __typename?: 'HomePageStat', readonly stats: ReadonlyArray<{ readonly __typename?: 'ComponentUiHomePageStat', readonly id: string, readonly text: string, readonly num: string }> } } } };

export type GetHomePageGalleryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageGalleryQuery = { readonly __typename?: 'Query', readonly homePageGallery: { readonly __typename?: 'HomePageGalleryEntityResponse', readonly data: { readonly __typename?: 'HomePageGalleryEntity', readonly attributes: { readonly __typename?: 'HomePageGallery', readonly title: string, readonly GalleryItems: ReadonlyArray<{ readonly __typename?: 'ComponentUiHomePageGalleryItem', readonly id: string, readonly title: string, readonly link: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }> } } } };

export type GetHomePageContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageContactsQuery = { readonly __typename?: 'Query', readonly homePageContact: { readonly __typename?: 'HomePageContactEntityResponse', readonly data: { readonly __typename?: 'HomePageContactEntity', readonly attributes: { readonly __typename?: 'HomePageContact', readonly title: string, readonly frame_url: string, readonly Contacts: ReadonlyArray<{ readonly __typename?: 'ComponentUiHomePageContactItem', readonly id: string, readonly name: string, readonly position: string, readonly phone: string, readonly email: string }> } } } };

export type GetHomePageLayoutDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageLayoutDataQuery = { readonly __typename?: 'Query', readonly seo: { readonly __typename?: 'SeoEntityResponse', readonly data: { readonly __typename?: 'SeoEntity', readonly attributes: { readonly __typename?: 'Seo', readonly SEO: ReadonlyArray<{ readonly __typename?: 'ComponentPagesMeta', readonly id: string, readonly name: string, readonly content: string }> } } }, readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly Header: { readonly __typename?: 'ComponentHeaderHeader', readonly navigation: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu1', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu2', readonly id: string, readonly text: string, readonly link: string, readonly submenu: ReadonlyArray<{ readonly __typename?: 'ComponentHeaderSubmenu3', readonly id: string, readonly text: string, readonly link: string }> }> }>, readonly headerIcons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }>, readonly social: { readonly __typename?: 'ComponentUiSocial', readonly text: string, readonly icons: ReadonlyArray<{ readonly __typename?: 'ComponentUiIconButton', readonly id: string, readonly text: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly formats: any } } } }> } } } } }, readonly footer: { readonly __typename?: 'FooterEntityResponse', readonly data: { readonly __typename?: 'FooterEntity', readonly attributes: { readonly __typename?: 'Footer', readonly copyright: string, readonly map_url: string, readonly title: string, readonly address: string, readonly main_phone: string, readonly secondary_phone: string, readonly email: string, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly map_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } }, readonly social: ReadonlyArray<{ readonly __typename?: 'ComponentUiFooterSocial', readonly id: string, readonly link: string, readonly icon: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } }> } } } };

export type GetMainScreenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainScreenQuery = { readonly __typename?: 'Query', readonly header: { readonly __typename?: 'HeaderEntityResponse', readonly data: { readonly __typename?: 'HeaderEntity', readonly attributes: { readonly __typename?: 'Header', readonly Header: { readonly __typename?: 'ComponentHeaderHeader', readonly title: string, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly background: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly primaryVideoPoster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly secondaryVideoPoster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } } } } };

export type GetNewsQueryVariables = Exact<{
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetNewsQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly meta: { readonly __typename?: 'ResponseCollectionMeta', readonly pagination: { readonly __typename?: 'Pagination', readonly total: number, readonly page: number, readonly pageSize: number, readonly pageCount: number } }, readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Novina', readonly title: string, readonly body: string, readonly date: any, readonly video_url: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly collage_photos: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> }, readonly news_tags: { readonly __typename?: 'NewsTagRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NewsTagEntity', readonly id: string, readonly attributes: { readonly __typename?: 'NewsTag', readonly title: string } }> } } }> } };

export type GetAllNovinasIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNovinasIdQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Novina', readonly date: any } }> } };

export type GetNewsByMonthQueryVariables = Exact<{
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  startDate: InputMaybe<Scalars['Date']['input']>;
  endDate: InputMaybe<Scalars['Date']['input']>;
}>;


export type GetNewsByMonthQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly meta: { readonly __typename?: 'ResponseCollectionMeta', readonly pagination: { readonly __typename?: 'Pagination', readonly total: number, readonly page: number, readonly pageSize: number, readonly pageCount: number } }, readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Novina', readonly title: string, readonly body: string, readonly date: any, readonly video_url: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly collage_photos: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> }, readonly news_tags: { readonly __typename?: 'NewsTagRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NewsTagEntity', readonly id: string, readonly attributes: { readonly __typename?: 'NewsTag', readonly title: string } }> } } }> } };

export type GetOneTeacherQueryVariables = Exact<{
  teacherSlug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetOneTeacherQuery = { readonly __typename?: 'Query', readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly email: string, readonly phone: string, readonly slug: string, readonly category: Enum_Worker_Category, readonly is_administration: boolean, readonly position: string, readonly additional_information: string, readonly printed_works: string, readonly calendar_id: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly lessons: { readonly __typename?: 'LessonRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'LessonEntity', readonly attributes: { readonly __typename?: 'Lesson', readonly name: string } }> }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly name: string, readonly slug: string } } } } }> } };

export type GetPageQueryVariables = Exact<{
  pageUrl: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageQuery = { readonly __typename?: 'Query', readonly pages: { readonly __typename?: 'PageEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PageEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Page', readonly title: string, readonly page_url: string, readonly layout: Enum_Page_Layout, readonly SEO: { readonly __typename?: 'ComponentPagesSeo', readonly title: string, readonly description: string, readonly meta: ReadonlyArray<{ readonly __typename?: 'ComponentPagesMeta', readonly id: string, readonly name: string, readonly content: string }> }, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly page_components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksFullSizePerson', readonly id: string, readonly component_type: string, readonly name: string, readonly body: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentPageBlocksPageCards', readonly id: string, readonly component_type: string, readonly cards: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksPageCard', readonly id: string, readonly name: string, readonly link: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly right_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksFullSizePerson', readonly id: string, readonly component_type: string, readonly name: string, readonly body: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentPageBlocksPageCards', readonly id: string, readonly component_type: string, readonly cards: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksPageCard', readonly id: string, readonly name: string, readonly link: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly left_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksFullSizePerson', readonly id: string, readonly component_type: string, readonly name: string, readonly body: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'ComponentPageBlocksPageCards', readonly id: string, readonly component_type: string, readonly cards: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksPageCard', readonly id: string, readonly name: string, readonly link: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }> } }> } };

export type GetPanoramsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPanoramsQuery = { readonly __typename?: 'Query', readonly panoramas: { readonly __typename?: 'PanoramaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly width: number, readonly height: number } } } } }> } };

export type GetPartnersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPartnersQuery = { readonly __typename?: 'Query', readonly partners: { readonly __typename?: 'PartnerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } };

export type GetSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeoQuery = { readonly __typename?: 'Query', readonly seo: { readonly __typename?: 'SeoEntityResponse', readonly data: { readonly __typename?: 'SeoEntity', readonly attributes: { readonly __typename?: 'Seo', readonly SEO: ReadonlyArray<{ readonly __typename?: 'ComponentPagesMeta', readonly id: string, readonly name: string, readonly content: string }> } } } };

export type GetSomeLastNewsQueryVariables = Exact<{
  newsCount?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetSomeLastNewsQuery = { readonly __typename?: 'Query', readonly novinas: { readonly __typename?: 'NovinaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'NovinaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Novina', readonly title: string, readonly date: any } }> } };

export type GetSubdivQueryVariables = Exact<{
  subdivSlug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetSubdivQuery = { readonly __typename?: 'Query', readonly subdivisions: { readonly __typename?: 'SubdivisionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'SubdivisionEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Subdivision', readonly name: string, readonly slug: string, readonly page_url: string, readonly layout: Enum_Subdivision_Layout, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> }, readonly SEO: { readonly __typename?: 'ComponentPagesSeo', readonly title: string, readonly description: string, readonly meta: ReadonlyArray<{ readonly __typename?: 'ComponentPagesMeta', readonly id: string, readonly name: string, readonly content: string }> }, readonly page_components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly right_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly left_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }> } }> } };

export type GetTeacherScheduleQueryVariables = Exact<{
  teacherSlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTeacherScheduleQuery = { readonly __typename?: 'Query', readonly workers: { readonly __typename?: 'WorkerEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly calendar_id: string } }> } };

export type GetAllCycleCommissionsTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCycleCommissionsTeachersQuery = { readonly __typename?: 'Query', readonly cycleCommissions: { readonly __typename?: 'CycleCommissionEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly name: string, readonly workers: { readonly __typename?: 'WorkerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly slug: string } }> } } }> } };

export type GetVidilenyaQueryVariables = Exact<{
  vidilenyaSlug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetVidilenyaQuery = { readonly __typename?: 'Query', readonly vidilenyas: { readonly __typename?: 'VidilenyaEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'VidilenyaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Vidilenya', readonly name: string, readonly slug: string, readonly layout: Enum_Vidilenya_Layout, readonly main_photo: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> }, readonly SEO: { readonly __typename?: 'ComponentPagesSeo', readonly title: string, readonly description: string, readonly meta: ReadonlyArray<{ readonly __typename?: 'ComponentPagesMeta', readonly id: string, readonly name: string, readonly content: string }> }, readonly page_components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly right_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }>, readonly left_sidebar: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksBody', readonly id: string, readonly body: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksButtonImages', readonly id: string, readonly component_type: string, readonly Components: ReadonlyArray<{ readonly __typename?: 'ComponentPageBlocksButtonImage', readonly id: string, readonly link: string, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } }> } | { readonly __typename?: 'ComponentPageBlocksButtonLink', readonly id: string, readonly text: string, readonly link: string, readonly component_type: string } | { readonly __typename?: 'ComponentPageBlocksEducationBooks', readonly id: string, readonly description: string, readonly component_type: string, readonly main_photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } }, readonly authors: { readonly __typename?: 'ComponentPageBlocksAccordion', readonly id: string, readonly title: string, readonly body: string, readonly default_open: boolean, readonly component_type: string } } | { readonly __typename?: 'ComponentPageBlocksPanorams', readonly id: string, readonly title: string, readonly component_type: string, readonly withBackground: boolean, readonly panoramas: { readonly __typename?: 'PanoramaRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PanoramaEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Panorama', readonly title: string, readonly link: string, readonly weight: number, readonly poster: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPartnersBlock', readonly id: string, readonly component_type: string, readonly title: string, readonly partners: { readonly __typename?: 'PartnerRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'PartnerEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Partner', readonly name: string, readonly link: string, readonly presentation_link: string, readonly type: Enum_Partner_Type, readonly weight: number, readonly logo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly width: number, readonly height: number } } } } }> } } | { readonly __typename?: 'ComponentPageBlocksPerson', readonly id: string, readonly component_type: string, readonly worker: { readonly __typename?: 'WorkerEntityResponse', readonly data: { readonly __typename?: 'WorkerEntity', readonly attributes: { readonly __typename?: 'Worker', readonly name: string, readonly position: string, readonly email: string, readonly phone: string, readonly slug: string, readonly photo: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } }, readonly cycle_commission: { readonly __typename?: 'CycleCommissionEntityResponse', readonly data: { readonly __typename?: 'CycleCommissionEntity', readonly attributes: { readonly __typename?: 'CycleCommission', readonly slug: string } } } } } } } | { readonly __typename?: 'ComponentPageBlocksPhotosGallery', readonly id: string, readonly title: string, readonly component_type: string, readonly images: { readonly __typename?: 'UploadFileRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } }> } } | { readonly __typename?: 'ComponentPageBlocksTwoColumnWithImage', readonly id: string, readonly body: string, readonly component_type: string, readonly layout: Enum_Componentpageblockstwocolumnwithimage_Layout, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly width: number, readonly height: number } } } } | { readonly __typename?: 'Error' }> } }> } };

export const GetNavigationFragmentDoc = gql`
    fragment GetNavigation on ComponentHeaderHeader {
  navigation {
    id
    text
    link
    submenu {
      id
      text
      link
      submenu {
        id
        text
        link
      }
    }
  }
}
    `;
export const GetHeaderIconsFragmentDoc = gql`
    fragment GetHeaderIcons on ComponentHeaderHeader {
  headerIcons {
    id
    text
    link
    icon {
      data {
        attributes {
          url
          formats
        }
      }
    }
  }
}
    `;
export const GetHeaderSocialFragmentDoc = gql`
    fragment GetHeaderSocial on ComponentHeaderHeader {
  social {
    text
    icons {
      id
      text
      link
      icon {
        data {
          attributes {
            url
            formats
          }
        }
      }
    }
  }
}
    `;
export const MediaFileFragmentFragmentDoc = gql`
    fragment mediaFileFragment on UploadFileEntityResponse {
  data {
    attributes {
      name
      url
      width
      height
    }
  }
}
    `;
export const GetBodyComponentFragmentDoc = gql`
    fragment GetBodyComponent on ComponentPageBlocksBody {
  id
  body
  component_type
}
    `;
export const GetButtonImagesComponentFragmentDoc = gql`
    fragment GetButtonImagesComponent on ComponentPageBlocksButtonImages {
  id
  component_type
  Components {
    id
    link
    image {
      data {
        attributes {
          url
          width
          height
        }
      }
    }
  }
}
    `;
export const GetButtonLinkComponentFragmentDoc = gql`
    fragment GetButtonLinkComponent on ComponentPageBlocksButtonLink {
  id
  text
  link
  component_type
}
    `;
export const GetAccordionComponentFragmentDoc = gql`
    fragment GetAccordionComponent on ComponentPageBlocksAccordion {
  id
  title
  body
  default_open
  component_type
}
    `;
export const GetEducationBooksComponentFragmentDoc = gql`
    fragment GetEducationBooksComponent on ComponentPageBlocksEducationBooks {
  id
  description
  component_type
  main_photo {
    data {
      attributes {
        url
      }
    }
  }
  authors {
    ...GetAccordionComponent
  }
}
    ${GetAccordionComponentFragmentDoc}`;
export const GetBlocksPanoramsComponentFragmentDoc = gql`
    fragment GetBlocksPanoramsComponent on ComponentPageBlocksPanorams {
  id
  title
  component_type
  panoramas(pagination: {pageSize: 30}) {
    data {
      id
      attributes {
        title
        link
        poster {
          data {
            attributes {
              url
            }
          }
        }
        weight
      }
    }
  }
  withBackground
}
    `;
export const GetPartnersBlockComponentFragmentDoc = gql`
    fragment GetPartnersBlockComponent on ComponentPageBlocksPartnersBlock {
  id
  component_type
  title
  partners(sort: ["weight:desc", "name:asc"]) {
    data {
      id
      attributes {
        name
        logo {
          data {
            attributes {
              url
              name
              width
              height
            }
          }
        }
        link
        presentation_link
        type
        weight
      }
    }
  }
}
    `;
export const GetPhotosGalleryComponentFragmentDoc = gql`
    fragment GetPhotosGalleryComponent on ComponentPageBlocksPhotosGallery {
  id
  title
  component_type
  images(pagination: {pageSize: 30}) {
    data {
      id
      attributes {
        url
        width
        height
      }
    }
  }
}
    `;
export const GetTwoColumnWithImageComponentFragmentDoc = gql`
    fragment GetTwoColumnWithImageComponent on ComponentPageBlocksTwoColumnWithImage {
  id
  body
  component_type
  image {
    data {
      attributes {
        url
        width
        height
      }
    }
  }
  layout
}
    `;
export const GetBlocksPersonComponentFragmentDoc = gql`
    fragment GetBlocksPersonComponent on ComponentPageBlocksPerson {
  id
  component_type
  worker {
    data {
      attributes {
        name
        photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        position
        email
        phone
        slug
        cycle_commission {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const GetPageCardsComponentFragmentDoc = gql`
    fragment GetPageCardsComponent on ComponentPageBlocksPageCards {
  id
  component_type
  cards {
    id
    name
    photo {
      data {
        attributes {
          url
          width
          height
        }
      }
    }
    link
  }
}
    `;
export const GetFullSizePersonComponentFragmentDoc = gql`
    fragment GetFullSizePersonComponent on ComponentPageBlocksFullSizePerson {
  id
  component_type
  name
  body
  photo {
    data {
      attributes {
        url
        name
        width
        height
      }
    }
  }
}
    `;
export const GetAdministrationDocument = gql`
    query GetAdministration {
  workers(
    filters: {is_administration: {in: true}}
    sort: ["weight:desc", "name:asc"]
    pagination: {pageSize: 200}
  ) {
    data {
      id
      attributes {
        name
        photo {
          data {
            attributes {
              url
            }
          }
        }
        email
        phone
        position
        lessons {
          data {
            attributes {
              name
            }
          }
        }
        slug
        cycle_commission {
          data {
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAdvertisementsDocument = gql`
    query GetAdvertisements {
  advertisements(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        title
        body
      }
    }
  }
}
    `;
export const GetAllCycleCommissionsDocument = gql`
    query GetAllCycleCommissions {
  cycleCommissions(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        name
        slug
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllCycleCommissionsSlugDocument = gql`
    query GetAllCycleCommissionsSlug {
  cycleCommissions(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        slug
      }
    }
  }
}
    `;
export const GetAllEventsDocument = gql`
    query GetAllEvents {
  events(pagination: {pageSize: 100}, sort: ["weight:desc", "date:desc"]) {
    data {
      id
      attributes {
        title
        date
        weight
        image {
          data {
            attributes {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllGroupsDocument = gql`
    query GetAllGroups {
  groups(pagination: {pageSize: 200}) {
    data {
      id
      attributes {
        name
        vidilenya {
          data {
            attributes {
              name
            }
          }
        }
        specialty
        educationalDegree
        course_number
      }
    }
  }
}
    `;
export const GetAllNewsDatesDocument = gql`
    query GetAllNewsDates {
  novinas(pagination: {pageSize: 200000}) {
    data {
      id
      attributes {
        date
      }
    }
  }
}
    `;
export const GetAllPagesUrlDocument = gql`
    query GetAllPagesUrl {
  pages(pagination: {pageSize: 500}) {
    data {
      attributes {
        page_url
      }
    }
  }
}
    `;
export const GetAllSubdivisionDocument = gql`
    query GetAllSubdivision {
  subdivisions(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        name
        slug
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        page_url
      }
    }
  }
}
    `;
export const GetAllSubdivisionSlugDocument = gql`
    query GetAllSubdivisionSlug {
  subdivisions(pagination: {pageSize: 100}) {
    data {
      attributes {
        slug
      }
    }
  }
}
    `;
export const GetAllTeachersDocument = gql`
    query GetAllTeachers {
  workers(
    filters: {category: {in: ["teacher"]}}
    sort: "name:asc"
    pagination: {pageSize: 200}
  ) {
    data {
      attributes {
        name
        slug
      }
    }
  }
}
    `;
export const GetAllTeachersWithCycleCommissionDocument = gql`
    query GetAllTeachersWithCycleCommission {
  workers(
    filters: {category: {in: ["teacher"]}}
    sort: "name:asc"
    pagination: {pageSize: 500}
  ) {
    data {
      attributes {
        name
        slug
        cycle_commission {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllTeachersFullInfoDocument = gql`
    query GetAllTeachersFullInfo($cmkName: String = "") {
  workers(
    filters: {category: {in: ["teacher"]}, cycle_commission: {name: {contains: $cmkName}}}
    sort: "name:asc"
    pagination: {pageSize: 200}
  ) {
    data {
      id
      attributes {
        name
        photo {
          data {
            attributes {
              url
            }
          }
        }
        email
        phone
        lessons {
          data {
            attributes {
              name
            }
          }
        }
        slug
        cycle_commission {
          data {
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllVideosDocument = gql`
    query GetAllVideos {
  videos(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        title
        video_url
        video_poster {
          data {
            attributes {
              url
              name
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllVidilenyasDocument = gql`
    query GetAllVidilenyas {
  vidilenyas(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        name
        slug
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllVidilenyaSlugDocument = gql`
    query GetAllVidilenyaSlug {
  vidilenyas(pagination: {pageSize: 100}) {
    data {
      attributes {
        slug
      }
    }
  }
}
    `;
export const GetCycleCommissionDocument = gql`
    query GetCycleCommission($pageUrl: String) {
  cycleCommissions(filters: {page_url: {in: [$pageUrl]}}) {
    data {
      id
      attributes {
        name
        slug
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        SEO {
          title
          description
          meta {
            id
            name
            content
          }
        }
        page_url
        layout
        headOfCommission {
          data {
            attributes {
              name
              slug
              photo {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
              position
              phone
              email
            }
          }
        }
        page_components {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        right_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        left_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        workers(pagination: {pageSize: 100}) {
          data {
            attributes {
              name
              slug
              photo {
                data {
                  attributes {
                    url
                  }
                }
              }
              lessons {
                data {
                  attributes {
                    name
                  }
                }
              }
              email
              phone
              position
            }
          }
        }
      }
    }
  }
}
    ${GetAccordionComponentFragmentDoc}
${GetBodyComponentFragmentDoc}
${GetButtonImagesComponentFragmentDoc}
${GetButtonLinkComponentFragmentDoc}
${GetEducationBooksComponentFragmentDoc}
${GetBlocksPanoramsComponentFragmentDoc}
${GetPartnersBlockComponentFragmentDoc}
${GetPhotosGalleryComponentFragmentDoc}
${GetTwoColumnWithImageComponentFragmentDoc}
${GetBlocksPersonComponentFragmentDoc}`;
export const GetFooterDocument = gql`
    query GetFooter {
  footer {
    data {
      attributes {
        logo {
          ...mediaFileFragment
        }
        copyright
        map_url
        map_photo {
          ...mediaFileFragment
        }
        title
        address
        main_phone
        secondary_phone
        email
        social {
          id
          link
          icon {
            ...mediaFileFragment
          }
        }
      }
    }
  }
}
    ${MediaFileFragmentFragmentDoc}`;
export const GetFullNewsDocument = gql`
    query GetFullNews($newsId: ID = "3") {
  novinas(filters: {id: {in: [$newsId]}}) {
    data {
      attributes {
        title
        body
        date
        main_photo {
          data {
            attributes {
              url
              name
              width
              height
            }
          }
        }
        collage_photos(pagination: {pageSize: 30}) {
          data {
            attributes {
              url
              name
              width
              height
            }
          }
        }
        video_url
        news_tags {
          data {
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;
export const GetGroupScheduleDocument = gql`
    query GetGroupSchedule($groupName: String) {
  groups(filters: {name: {in: [$groupName]}}) {
    data {
      attributes {
        name
        calendar_id
      }
    }
  }
}
    `;
export const GetAllGroupScheduleDocument = gql`
    query GetAllGroupSchedule {
  groups(pagination: {pageSize: 1000}) {
    data {
      attributes {
        name
        calendar_id
      }
    }
  }
}
    `;
export const GetHeaderDocument = gql`
    query GetHeader {
  header {
    data {
      attributes {
        Header {
          ...GetNavigation
          ...GetHeaderIcons
          ...GetHeaderSocial
        }
      }
    }
  }
}
    ${GetNavigationFragmentDoc}
${GetHeaderIconsFragmentDoc}
${GetHeaderSocialFragmentDoc}`;
export const GetHeaderScheduleDocument = gql`
    query GetHeaderSchedule {
  groups(sort: "name:asc", pagination: {pageSize: 500}) {
    data {
      attributes {
        name
      }
    }
  }
  workers(
    filters: {category: {in: ["teacher"]}}
    sort: "name:asc"
    pagination: {pageSize: 500}
  ) {
    data {
      attributes {
        name
        slug
      }
    }
  }
}
    `;
export const GetHomePageDataDocument = gql`
    query GetHomePageData {
  homePageAbout {
    data {
      attributes {
        title
        body
        buttonText
        photo {
          ...mediaFileFragment
        }
      }
    }
  }
  homePageStat {
    data {
      attributes {
        stats {
          id
          text
          num
        }
      }
    }
  }
  homePageGallery {
    data {
      attributes {
        title
        GalleryItems {
          id
          title
          link
          photo {
            ...mediaFileFragment
          }
        }
      }
    }
  }
  homePageContact {
    data {
      attributes {
        title
        Contacts {
          id
          name
          position
          phone
          email
        }
        frame_url
      }
    }
  }
}
    ${MediaFileFragmentFragmentDoc}`;
export const GetHomePageAboutDocument = gql`
    query GetHomePageAbout {
  homePageAbout {
    data {
      attributes {
        title
        body
        buttonText
        photo {
          ...mediaFileFragment
        }
      }
    }
  }
}
    ${MediaFileFragmentFragmentDoc}`;
export const GetHomePageStatDocument = gql`
    query GetHomePageStat {
  homePageStat {
    data {
      attributes {
        stats {
          id
          text
          num
        }
      }
    }
  }
}
    `;
export const GetHomePageGalleryDocument = gql`
    query GetHomePageGallery {
  homePageGallery {
    data {
      attributes {
        title
        GalleryItems {
          id
          title
          link
          photo {
            ...mediaFileFragment
          }
        }
      }
    }
  }
}
    ${MediaFileFragmentFragmentDoc}`;
export const GetHomePageContactsDocument = gql`
    query GetHomePageContacts {
  homePageContact {
    data {
      attributes {
        title
        Contacts {
          id
          name
          position
          phone
          email
        }
        frame_url
      }
    }
  }
}
    `;
export const GetHomePageLayoutDataDocument = gql`
    query GetHomePageLayoutData {
  seo {
    data {
      attributes {
        SEO(pagination: {pageSize: 100}) {
          id
          name
          content
        }
      }
    }
  }
  header {
    data {
      attributes {
        Header {
          ...GetNavigation
          ...GetHeaderIcons
          ...GetHeaderSocial
        }
      }
    }
  }
  footer {
    data {
      attributes {
        logo {
          ...mediaFileFragment
        }
        copyright
        map_url
        map_photo {
          ...mediaFileFragment
        }
        title
        address
        main_phone
        secondary_phone
        email
        social {
          id
          link
          icon {
            ...mediaFileFragment
          }
        }
      }
    }
  }
}
    ${GetNavigationFragmentDoc}
${GetHeaderIconsFragmentDoc}
${GetHeaderSocialFragmentDoc}
${MediaFileFragmentFragmentDoc}`;
export const GetMainScreenDocument = gql`
    query GetMainScreen {
  header {
    data {
      attributes {
        Header {
          title
          logo {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          background {
            data {
              attributes {
                url
              }
            }
          }
          primaryVideoPoster {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          secondaryVideoPoster {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetNewsDocument = gql`
    query GetNews($currentPage: Int = 1, $pageSize: Int = 3) {
  novinas(
    sort: "date:desc"
    pagination: {page: $currentPage, pageSize: $pageSize}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        title
        body
        date
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        collage_photos {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
        video_url
        news_tags {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;
export const GetAllNovinasIdDocument = gql`
    query GetAllNovinasId {
  novinas(pagination: {pageSize: 50000}) {
    data {
      id
      attributes {
        date
      }
    }
  }
}
    `;
export const GetNewsByMonthDocument = gql`
    query GetNewsByMonth($currentPage: Int = 1, $pageSize: Int = 6, $startDate: Date, $endDate: Date) {
  novinas(
    sort: "date:desc"
    pagination: {page: $currentPage, pageSize: $pageSize}
    filters: {date: {gte: $startDate, lte: $endDate}}
  ) {
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
    data {
      id
      attributes {
        title
        body
        date
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        collage_photos {
          data {
            id
            attributes {
              url
              width
              height
            }
          }
        }
        video_url
        news_tags {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
    `;
export const GetOneTeacherDocument = gql`
    query GetOneTeacher($teacherSlug: String) {
  workers(filters: {category: {in: ["teacher"]}, slug: {contains: $teacherSlug}}) {
    data {
      id
      attributes {
        name
        photo {
          data {
            attributes {
              url
            }
          }
        }
        email
        phone
        lessons {
          data {
            attributes {
              name
            }
          }
        }
        slug
        cycle_commission {
          data {
            attributes {
              name
              slug
            }
          }
        }
        category
        is_administration
        position
        additional_information
        printed_works
        calendar_id
      }
    }
  }
}
    `;
export const GetPageDocument = gql`
    query GetPage($pageUrl: String) {
  pages(filters: {page_url: {in: [$pageUrl]}}) {
    data {
      id
      attributes {
        title
        SEO {
          title
          description
          meta {
            id
            name
            content
          }
        }
        page_url
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        layout
        page_components {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
          ...GetPageCardsComponent
          ...GetFullSizePersonComponent
        }
        right_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
          ...GetPageCardsComponent
          ...GetFullSizePersonComponent
        }
        left_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
          ...GetPageCardsComponent
          ...GetFullSizePersonComponent
        }
      }
    }
  }
}
    ${GetAccordionComponentFragmentDoc}
${GetBodyComponentFragmentDoc}
${GetButtonImagesComponentFragmentDoc}
${GetButtonLinkComponentFragmentDoc}
${GetEducationBooksComponentFragmentDoc}
${GetBlocksPanoramsComponentFragmentDoc}
${GetPartnersBlockComponentFragmentDoc}
${GetPhotosGalleryComponentFragmentDoc}
${GetTwoColumnWithImageComponentFragmentDoc}
${GetBlocksPersonComponentFragmentDoc}
${GetPageCardsComponentFragmentDoc}
${GetFullSizePersonComponentFragmentDoc}`;
export const GetPanoramsDocument = gql`
    query GetPanorams {
  panoramas(sort: "weight:desc", pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        title
        link
        poster {
          ...mediaFileFragment
        }
        weight
      }
    }
  }
}
    ${MediaFileFragmentFragmentDoc}`;
export const GetPartnersDocument = gql`
    query GetPartners {
  partners(
    filters: {not: {type: {eq: "Other"}}}
    sort: "weight:desc"
    pagination: {pageSize: 100}
  ) {
    data {
      id
      attributes {
        name
        logo {
          data {
            attributes {
              url
              name
              width
              height
            }
          }
        }
        link
        presentation_link
        type
        weight
      }
    }
  }
}
    `;
export const GetSeoDocument = gql`
    query GetSEO {
  seo {
    data {
      attributes {
        SEO(pagination: {pageSize: 100}) {
          id
          name
          content
        }
      }
    }
  }
}
    `;
export const GetSomeLastNewsDocument = gql`
    query GetSomeLastNews($newsCount: Int = 5) {
  novinas(sort: "date:desc", pagination: {limit: $newsCount}) {
    data {
      id
      attributes {
        title
        date
      }
    }
  }
}
    `;
export const GetSubdivDocument = gql`
    query GetSubdiv($subdivSlug: String) {
  subdivisions(filters: {slug: {in: [$subdivSlug]}}, pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        name
        slug
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        SEO {
          title
          description
          meta {
            id
            name
            content
          }
        }
        page_url
        layout
        page_components {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        right_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        left_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
      }
    }
  }
}
    ${GetAccordionComponentFragmentDoc}
${GetBodyComponentFragmentDoc}
${GetButtonImagesComponentFragmentDoc}
${GetButtonLinkComponentFragmentDoc}
${GetEducationBooksComponentFragmentDoc}
${GetBlocksPanoramsComponentFragmentDoc}
${GetPartnersBlockComponentFragmentDoc}
${GetPhotosGalleryComponentFragmentDoc}
${GetTwoColumnWithImageComponentFragmentDoc}
${GetBlocksPersonComponentFragmentDoc}`;
export const GetTeacherScheduleDocument = gql`
    query GetTeacherSchedule($teacherSlug: String = "stelmakh-im") {
  workers(filters: {slug: {in: [$teacherSlug]}}) {
    data {
      attributes {
        name
        calendar_id
      }
    }
  }
}
    `;
export const GetAllCycleCommissionsTeachersDocument = gql`
    query GetAllCycleCommissionsTeachers {
  cycleCommissions(pagination: {pageSize: 100}) {
    data {
      attributes {
        name
        workers(
          filters: {category: {in: ["teacher"]}}
          sort: "name:asc"
          pagination: {pageSize: 100}
        ) {
          data {
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const GetVidilenyaDocument = gql`
    query GetVidilenya($vidilenyaSlug: String) {
  vidilenyas(filters: {slug: {in: [$vidilenyaSlug]}}, pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        name
        slug
        main_photo {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
        SEO {
          title
          description
          meta {
            id
            name
            content
          }
        }
        layout
        page_components {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        right_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
        left_sidebar {
          ...GetAccordionComponent
          ...GetBodyComponent
          ...GetButtonImagesComponent
          ...GetButtonLinkComponent
          ...GetEducationBooksComponent
          ...GetBlocksPanoramsComponent
          ...GetPartnersBlockComponent
          ...GetPhotosGalleryComponent
          ...GetTwoColumnWithImageComponent
          ...GetBlocksPersonComponent
        }
      }
    }
  }
}
    ${GetAccordionComponentFragmentDoc}
${GetBodyComponentFragmentDoc}
${GetButtonImagesComponentFragmentDoc}
${GetButtonLinkComponentFragmentDoc}
${GetEducationBooksComponentFragmentDoc}
${GetBlocksPanoramsComponentFragmentDoc}
${GetPartnersBlockComponentFragmentDoc}
${GetPhotosGalleryComponentFragmentDoc}
${GetTwoColumnWithImageComponentFragmentDoc}
${GetBlocksPersonComponentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAdministration(variables?: GetAdministrationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdministrationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdministrationQuery>(GetAdministrationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdministration', 'query');
    },
    GetAdvertisements(variables?: GetAdvertisementsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdvertisementsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdvertisementsQuery>(GetAdvertisementsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdvertisements', 'query');
    },
    GetAllCycleCommissions(variables?: GetAllCycleCommissionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllCycleCommissionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCycleCommissionsQuery>(GetAllCycleCommissionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllCycleCommissions', 'query');
    },
    GetAllCycleCommissionsSlug(variables?: GetAllCycleCommissionsSlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllCycleCommissionsSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCycleCommissionsSlugQuery>(GetAllCycleCommissionsSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllCycleCommissionsSlug', 'query');
    },
    GetAllEvents(variables?: GetAllEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllEventsQuery>(GetAllEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEvents', 'query');
    },
    GetAllGroups(variables?: GetAllGroupsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllGroupsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllGroupsQuery>(GetAllGroupsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllGroups', 'query');
    },
    GetAllNewsDates(variables?: GetAllNewsDatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllNewsDatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllNewsDatesQuery>(GetAllNewsDatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllNewsDates', 'query');
    },
    GetAllPagesUrl(variables?: GetAllPagesUrlQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllPagesUrlQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPagesUrlQuery>(GetAllPagesUrlDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllPagesUrl', 'query');
    },
    GetAllSubdivision(variables?: GetAllSubdivisionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllSubdivisionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllSubdivisionQuery>(GetAllSubdivisionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllSubdivision', 'query');
    },
    GetAllSubdivisionSlug(variables?: GetAllSubdivisionSlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllSubdivisionSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllSubdivisionSlugQuery>(GetAllSubdivisionSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllSubdivisionSlug', 'query');
    },
    GetAllTeachers(variables?: GetAllTeachersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllTeachersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTeachersQuery>(GetAllTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllTeachers', 'query');
    },
    GetAllTeachersWithCycleCommission(variables?: GetAllTeachersWithCycleCommissionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllTeachersWithCycleCommissionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTeachersWithCycleCommissionQuery>(GetAllTeachersWithCycleCommissionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllTeachersWithCycleCommission', 'query');
    },
    GetAllTeachersFullInfo(variables?: GetAllTeachersFullInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllTeachersFullInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTeachersFullInfoQuery>(GetAllTeachersFullInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllTeachersFullInfo', 'query');
    },
    GetAllVideos(variables?: GetAllVideosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllVideosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllVideosQuery>(GetAllVideosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllVideos', 'query');
    },
    GetAllVidilenyas(variables?: GetAllVidilenyasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllVidilenyasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllVidilenyasQuery>(GetAllVidilenyasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllVidilenyas', 'query');
    },
    GetAllVidilenyaSlug(variables?: GetAllVidilenyaSlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllVidilenyaSlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllVidilenyaSlugQuery>(GetAllVidilenyaSlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllVidilenyaSlug', 'query');
    },
    GetCycleCommission(variables?: GetCycleCommissionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCycleCommissionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCycleCommissionQuery>(GetCycleCommissionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCycleCommission', 'query');
    },
    GetFooter(variables?: GetFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFooterQuery>(GetFooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetFooter', 'query');
    },
    GetFullNews(variables?: GetFullNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetFullNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFullNewsQuery>(GetFullNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetFullNews', 'query');
    },
    GetGroupSchedule(variables?: GetGroupScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetGroupScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGroupScheduleQuery>(GetGroupScheduleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetGroupSchedule', 'query');
    },
    GetAllGroupSchedule(variables?: GetAllGroupScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllGroupScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllGroupScheduleQuery>(GetAllGroupScheduleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllGroupSchedule', 'query');
    },
    GetHeader(variables?: GetHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHeaderQuery>(GetHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHeader', 'query');
    },
    GetHeaderSchedule(variables?: GetHeaderScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHeaderScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHeaderScheduleQuery>(GetHeaderScheduleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHeaderSchedule', 'query');
    },
    GetHomePageData(variables?: GetHomePageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageDataQuery>(GetHomePageDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePageData', 'query');
    },
    GetHomePageAbout(variables?: GetHomePageAboutQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageAboutQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageAboutQuery>(GetHomePageAboutDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePageAbout', 'query');
    },
    GetHomePageStat(variables?: GetHomePageStatQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageStatQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageStatQuery>(GetHomePageStatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePageStat', 'query');
    },
    GetHomePageGallery(variables?: GetHomePageGalleryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageGalleryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageGalleryQuery>(GetHomePageGalleryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePageGallery', 'query');
    },
    GetHomePageContacts(variables?: GetHomePageContactsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageContactsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageContactsQuery>(GetHomePageContactsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePageContacts', 'query');
    },
    GetHomePageLayoutData(variables?: GetHomePageLayoutDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageLayoutDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageLayoutDataQuery>(GetHomePageLayoutDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePageLayoutData', 'query');
    },
    GetMainScreen(variables?: GetMainScreenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMainScreenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMainScreenQuery>(GetMainScreenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMainScreen', 'query');
    },
    GetNews(variables?: GetNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNewsQuery>(GetNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNews', 'query');
    },
    GetAllNovinasId(variables?: GetAllNovinasIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllNovinasIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllNovinasIdQuery>(GetAllNovinasIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllNovinasId', 'query');
    },
    GetNewsByMonth(variables?: GetNewsByMonthQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNewsByMonthQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNewsByMonthQuery>(GetNewsByMonthDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNewsByMonth', 'query');
    },
    GetOneTeacher(variables?: GetOneTeacherQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOneTeacherQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOneTeacherQuery>(GetOneTeacherDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOneTeacher', 'query');
    },
    GetPage(variables?: GetPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageQuery>(GetPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPage', 'query');
    },
    GetPanorams(variables?: GetPanoramsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPanoramsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPanoramsQuery>(GetPanoramsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPanorams', 'query');
    },
    GetPartners(variables?: GetPartnersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPartnersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPartnersQuery>(GetPartnersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPartners', 'query');
    },
    GetSEO(variables?: GetSeoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSeoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeoQuery>(GetSeoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSEO', 'query');
    },
    GetSomeLastNews(variables?: GetSomeLastNewsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSomeLastNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSomeLastNewsQuery>(GetSomeLastNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSomeLastNews', 'query');
    },
    GetSubdiv(variables?: GetSubdivQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSubdivQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubdivQuery>(GetSubdivDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSubdiv', 'query');
    },
    GetTeacherSchedule(variables?: GetTeacherScheduleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTeacherScheduleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTeacherScheduleQuery>(GetTeacherScheduleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTeacherSchedule', 'query');
    },
    GetAllCycleCommissionsTeachers(variables?: GetAllCycleCommissionsTeachersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllCycleCommissionsTeachersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCycleCommissionsTeachersQuery>(GetAllCycleCommissionsTeachersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllCycleCommissionsTeachers', 'query');
    },
    GetVidilenya(variables?: GetVidilenyaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetVidilenyaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVidilenyaQuery>(GetVidilenyaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetVidilenya', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
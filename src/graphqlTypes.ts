export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
   __typename?: 'Query';
  account: Account;
  accounts: Array<Account>;
  accountBilling: AccountBillingPayload;
  applications: Array<Application>;
  beacons: Array<Beacon>;
  campaign: Campaign;
  campaigns: Array<Campaign>;
  campaignReporting: ReportingPayload;
  sdkApplicationConfig: Application;
  sdkConfig: SdkConfigPayLoad;
  sdkFetchCampaigns: Array<CampaignsPayload>;
  sdkFetchPullNotifications: Array<CampaignsPayload>;
  sdkLogs: Array<SdkLog>;
  me?: Maybe<User>;
  users?: Maybe<Array<User>>;
  code: Code;
  codes: Array<Code>;
  generateQRCode: Scalars['String'];
};


export type QueryCampaignArgs = {
  id: Scalars['ID'];
};


export type QueryCampaignReportingArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
  campaignIds?: Maybe<Array<Scalars['ID']>>;
};


export type QuerySdkFetchCampaignsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QuerySdkFetchPullNotificationsArgs = {
  beaconNamespace: Scalars['String'];
  beaconInstance: Scalars['String'];
};


export type QueryCodeArgs = {
  id: Scalars['ID'];
};


export type QueryGenerateQrCodeArgs = {
  id?: Maybe<Scalars['ID']>;
  size: Scalars['Int'];
  fileType: QrCodeFileType;
  backgroundColor: Scalars['String'];
  foregroundColor: Scalars['String'];
  eye1Color: Scalars['String'];
  eye2Color: Scalars['String'];
  eye3Color: Scalars['String'];
  eye4Color: Scalars['String'];
  eyeBall1Color: Scalars['String'];
  eyeBall2Color: Scalars['String'];
  eyeBall3Color: Scalars['String'];
  eyeBall4Color: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  bodyType: QrCodeBodyType;
  eyeType: QrCodeEyeType;
  eyeBallType: QrCodeEyeBallType;
};

export type Account = {
   __typename?: 'Account';
  id: Scalars['ID'];
  name: Scalars['String'];
  applications: Array<Application>;
  campaigns: Array<Campaign>;
  beacons: Array<Beacon>;
  users: Array<User>;
  billedApplication?: Maybe<Application>;
  pricePerBeacon: Scalars['Int'];
  pricePerActiveUser: Scalars['Float'];
  flatRatePrice: Scalars['Int'];
  flatRateActiveUserLimit: Scalars['Int'];
};

export type Application = {
   __typename?: 'Application';
  id: Scalars['ID'];
  name: Scalars['String'];
  key: Scalars['String'];
  useAppBadges: Scalars['Boolean'];
  beaconExpiration: Scalars['Int'];
  campaignExpiration: Scalars['Int'];
  requiredSdkVersionExpiration: Scalars['Int'];
  androidScaningIntervalOnBackground: Scalars['Int'];
  scaningIntervalOnForeground: Scalars['Int'];
  namespaces: Array<Namespace>;
  dailyNotificationLimit: Scalars['Int'];
  theme: Theme;
};

export type Namespace = {
   __typename?: 'Namespace';
  id: Scalars['ID'];
  name: Scalars['String'];
  ibeaconUuid: Scalars['String'];
  eddystoneUid: Scalars['String'];
};

export type Theme = {
   __typename?: 'Theme';
  id: Scalars['ID'];
  primaryColor: Scalars['String'];
  backgroundColor: Scalars['String'];
  textColor: Scalars['String'];
  fontSize: Scalars['Float'];
  lineHeight: Scalars['Float'];
  spacing: Scalars['Float'];
  titleColor: Scalars['String'];
  titleFontSize: Scalars['Float'];
  headingColor: Scalars['String'];
  headingFontSize: Scalars['Float'];
  buttonBackground: Scalars['String'];
  buttonTextColor: Scalars['String'];
};

export type Campaign = {
   __typename?: 'Campaign';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: CampaignType;
  enabled: Scalars['Boolean'];
  broadcastFrom?: Maybe<Scalars['DateTime']>;
  broadcastTo?: Maybe<Scalars['DateTime']>;
  cooldown: Scalars['Int'];
  maximumNotificationsPerUser?: Maybe<Scalars['Int']>;
  notificationTitle?: Maybe<Scalars['String']>;
  notificationText?: Maybe<Scalars['String']>;
  notificationImage?: Maybe<Scalars['String']>;
  listImage?: Maybe<Scalars['String']>;
  listTitle?: Maybe<Scalars['String']>;
  listText?: Maybe<Scalars['String']>;
  detailUrl?: Maybe<Scalars['String']>;
  inAppEvent?: Maybe<Scalars['String']>;
  account: Account;
  applications: Array<Application>;
  beacons: Array<Beacon>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  detailBlocks?: Maybe<Array<DetailBlock>>;
};

export enum CampaignType {
  Page = 'PAGE',
  WebPage = 'WEB_PAGE',
  InAppEvent = 'IN_APP_EVENT',
  CustomEndpoint = 'CUSTOM_ENDPOINT'
}


export type Beacon = {
   __typename?: 'Beacon';
  id: Scalars['ID'];
  uniqueId: Scalars['String'];
  name: Scalars['String'];
  namespace: Namespace;
  instance: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  txPower: Scalars['Int'];
  interval: Scalars['Int'];
  needSync: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['DateTime']>;
};

export type DetailBlock = Title | Heading | Paragraph | UnorderedList | OrderedList | Image | Button;

export type Title = {
   __typename?: 'Title';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type Heading = {
   __typename?: 'Heading';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type Paragraph = {
   __typename?: 'Paragraph';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type UnorderedList = {
   __typename?: 'UnorderedList';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type OrderedList = {
   __typename?: 'OrderedList';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type Image = {
   __typename?: 'Image';
  id: Scalars['ID'];
  src: Scalars['String'];
  width: Scalars['Int'];
  ratio: Scalars['Float'];
};

export type Button = {
   __typename?: 'Button';
  id: Scalars['ID'];
  text: Scalars['String'];
  link: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  createdAt: Scalars['DateTime'];
  role: UserRoleType;
  accounts: Array<Account>;
};

export enum UserRoleType {
  User = 'USER',
  Admin = 'ADMIN'
}

export type AccountBillingPayload = {
   __typename?: 'AccountBillingPayload';
  activeUsersCount: Scalars['Int'];
  beaconsCount: Scalars['Int'];
};

export type ReportingPayload = {
   __typename?: 'ReportingPayload';
  notificationCount: Scalars['Int'];
  notificationCountPerDays?: Maybe<Array<Maybe<DailyGraphObject>>>;
  uniqueUsersCount: Scalars['Int'];
  uniqueUsersCountPerDays?: Maybe<Array<Maybe<DailyGraphObject>>>;
  detailViewsCount: Scalars['Int'];
  detailViewsCountPerDays?: Maybe<Array<Maybe<DailyGraphObject>>>;
  clickedPullNotificationCount: Scalars['Int'];
  clickedPullNotificationCountPerDays?: Maybe<Array<Maybe<DailyGraphObject>>>;
};

export type DailyGraphObject = {
   __typename?: 'DailyGraphObject';
  date: Scalars['String'];
  count: Scalars['Int'];
};

export type SdkConfigPayLoad = {
   __typename?: 'SdkConfigPayLoad';
  requiredIosSdkVersion: Scalars['Int'];
  requiredAndroidSdkVersion: Scalars['Int'];
};

export type CampaignsPayload = {
   __typename?: 'CampaignsPayload';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: CampaignType;
  cooldown: Scalars['Int'];
  maximumNotificationsPerUser?: Maybe<Scalars['Int']>;
  notificationTitle?: Maybe<Scalars['String']>;
  notificationText?: Maybe<Scalars['String']>;
  notificationImage?: Maybe<Scalars['String']>;
  listImage?: Maybe<Scalars['String']>;
  listTitle?: Maybe<Scalars['String']>;
  listText?: Maybe<Scalars['String']>;
  inAppEvent?: Maybe<Scalars['String']>;
  detailBlocks: Array<DetailBlock>;
  blocks: Array<Block>;
  detailUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
};

export type Block = {
   __typename?: 'Block';
  id: Scalars['ID'];
  type: BlockType;
  attributes: Array<Attribute>;
};

export enum BlockType {
  Title = 'TITLE',
  Heading = 'HEADING',
  Paragraph = 'PARAGRAPH',
  UnorderedList = 'UNORDERED_LIST',
  OrderedList = 'ORDERED_LIST',
  Image = 'IMAGE',
  Button = 'BUTTON'
}

export type Attribute = {
   __typename?: 'Attribute';
  id: Scalars['ID'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type SdkLog = {
   __typename?: 'SdkLog';
  id: Scalars['ID'];
  eventType: SdkEventType;
  timestamp: Scalars['DateTime'];
  platform: PlatformType;
  deviceId: Scalars['String'];
  deviceVendor: Scalars['String'];
  deviceOs: Scalars['String'];
  deviceModel: Scalars['String'];
  sdkVersion: Scalars['Int'];
  beacon?: Maybe<Beacon>;
  campaign?: Maybe<Campaign>;
  hasBluetoothTurnedOn: Scalars['Boolean'];
  hasInternetConnection: Scalars['Boolean'];
  hasLocationPermission: Scalars['Boolean'];
  hasNotificationPermission: Scalars['Boolean'];
};

export enum SdkEventType {
  NewInstallation = 'NEW_INSTALLATION',
  AppStarted = 'APP_STARTED',
  AppClosed = 'APP_CLOSED',
  Trigger = 'TRIGGER',
  PullNotification = 'PULL_NOTIFICATION',
  CampaignDetailFromPullNotification = 'CAMPAIGN_DETAIL_FROM_PULL_NOTIFICATION',
  CampaignDetailFromCampaignsList = 'CAMPAIGN_DETAIL_FROM_CAMPAIGNS_LIST',
  CampaignsList = 'CAMPAIGNS_LIST'
}

export enum PlatformType {
  Ios = 'IOS',
  Android = 'ANDROID'
}

export type Code = {
   __typename?: 'Code';
  id: Scalars['ID'];
  name: Scalars['String'];
  activeCampaign: CampaignsPayload;
  fallbackCampaign: CampaignsPayload;
  dataUrl: Scalars['String'];
  backgroundColor: Scalars['String'];
  foregroundColor: Scalars['String'];
  eye1Color: Scalars['String'];
  eye2Color: Scalars['String'];
  eye3Color: Scalars['String'];
  eye4Color: Scalars['String'];
  eyeBall1Color: Scalars['String'];
  eyeBall2Color: Scalars['String'];
  eyeBall3Color: Scalars['String'];
  eyeBall4Color: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  file: Scalars['String'];
  bodyType: QrCodeBodyType;
  eyeType: QrCodeEyeType;
  eyeBallType: QrCodeEyeBallType;
  totalScans: Scalars['Int'];
  theme: Theme;
  createdAt: Scalars['DateTime'];
};


export type CodeFileArgs = {
  fileType: QrCodeFileType;
  size: Scalars['Int'];
};

export enum QrCodeFileType {
  Jpeg = 'JPEG',
  Png = 'PNG',
  Svg = 'SVG'
}

export enum QrCodeBodyType {
  Square = 'SQUARE',
  Mosaic = 'MOSAIC',
  Dot = 'DOT',
  Circle = 'CIRCLE',
  CircleZebra = 'CIRCLE_ZEBRA',
  CircleZebraVertical = 'CIRCLE_ZEBRA_VERTICAL',
  Circular = 'CIRCULAR',
  EdgeCut = 'EDGE_CUT',
  EdgeCutSmooth = 'EDGE_CUT_SMOOTH',
  Japnese = 'JAPNESE',
  Leaf = 'LEAF',
  Pointed = 'POINTED',
  PointedEdgeCut = 'POINTED_EDGE_CUT',
  PointedIn = 'POINTED_IN',
  PointedInSmooth = 'POINTED_IN_SMOOTH',
  PointedSmooth = 'POINTED_SMOOTH',
  Round = 'ROUND',
  RoundedIn = 'ROUNDED_IN',
  RoundedInSmooth = 'ROUNDED_IN_SMOOTH',
  RoundedPointed = 'ROUNDED_POINTED',
  Star = 'STAR',
  Diamond = 'DIAMOND'
}

export enum QrCodeEyeType {
  Frame0 = 'FRAME0',
  Frame1 = 'FRAME1',
  Frame2 = 'FRAME2',
  Frame3 = 'FRAME3',
  Frame4 = 'FRAME4',
  Frame5 = 'FRAME5',
  Frame6 = 'FRAME6',
  Frame7 = 'FRAME7',
  Frame8 = 'FRAME8',
  Frame10 = 'FRAME10',
  Frame11 = 'FRAME11',
  Frame12 = 'FRAME12',
  Frame13 = 'FRAME13',
  Frame14 = 'FRAME14',
  Frame16 = 'FRAME16'
}

export enum QrCodeEyeBallType {
  Ball0 = 'BALL0',
  Ball1 = 'BALL1',
  Ball2 = 'BALL2',
  Ball3 = 'BALL3',
  Ball5 = 'BALL5',
  Ball6 = 'BALL6',
  Ball7 = 'BALL7',
  Ball8 = 'BALL8',
  Ball10 = 'BALL10',
  Ball11 = 'BALL11',
  Ball12 = 'BALL12',
  Ball13 = 'BALL13',
  Ball14 = 'BALL14',
  Ball15 = 'BALL15',
  Ball16 = 'BALL16',
  Ball17 = 'BALL17',
  Ball18 = 'BALL18',
  Ball19 = 'BALL19'
}

export type Mutation = {
   __typename?: 'Mutation';
  addUserToAccount: Scalars['Boolean'];
  createAccount: Account;
  changeApplicationDebugMode: Scalars['Boolean'];
  createBeacon: Beacon;
  resetBeacon: Scalars['String'];
  createCampaign: Campaign;
  deleteCampaign: Campaign;
  updateCampaign: Campaign;
  uploadFile: Scalars['String'];
  sdkCreateLog: Scalars['String'];
  login: Scalars['Boolean'];
  createCode: Code;
  deleteCode: Code;
  updateCode: Code;
};


export type MutationAddUserToAccountArgs = {
  email: Scalars['String'];
};


export type MutationCreateAccountArgs = {
  name: Scalars['String'];
  applicationName: Scalars['String'];
  applicationKey: Scalars['String'];
};


export type MutationChangeApplicationDebugModeArgs = {
  debug: Scalars['Boolean'];
};


export type MutationCreateBeaconArgs = {
  uniqueId: Scalars['String'];
  name: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  txPower: Scalars['Int'];
};


export type MutationResetBeaconArgs = {
  uniqueId: Scalars['String'];
};


export type MutationCreateCampaignArgs = {
  data: CreateCampaignInput;
};


export type MutationDeleteCampaignArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCampaignArgs = {
  id: Scalars['ID'];
  data: CreateCampaignInput;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type MutationSdkCreateLogArgs = {
  events: Array<EventInput>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
};


export type MutationCreateCodeArgs = {
  name: Scalars['String'];
  activeCampaign: Scalars['ID'];
  fallbackCampaign: Scalars['ID'];
  backgroundColor: Scalars['String'];
  foregroundColor: Scalars['String'];
  eye1Color: Scalars['String'];
  eye2Color: Scalars['String'];
  eye3Color: Scalars['String'];
  eye4Color: Scalars['String'];
  eyeBall1Color: Scalars['String'];
  eyeBall2Color: Scalars['String'];
  eyeBall3Color: Scalars['String'];
  eyeBall4Color: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  bodyType: QrCodeBodyType;
  eyeType: QrCodeEyeType;
  eyeBallType: QrCodeEyeBallType;
};


export type MutationDeleteCodeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCodeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  activeCampaign: Scalars['ID'];
  fallbackCampaign: Scalars['ID'];
  backgroundColor: Scalars['String'];
  foregroundColor: Scalars['String'];
  eye1Color: Scalars['String'];
  eye2Color: Scalars['String'];
  eye3Color: Scalars['String'];
  eye4Color: Scalars['String'];
  eyeBall1Color: Scalars['String'];
  eyeBall2Color: Scalars['String'];
  eyeBall3Color: Scalars['String'];
  eyeBall4Color: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  bodyType: QrCodeBodyType;
  eyeType: QrCodeEyeType;
  eyeBallType: QrCodeEyeBallType;
};

export type CreateCampaignInput = {
  name: Scalars['String'];
  type: CampaignType;
  enabled: Scalars['Boolean'];
  broadcastFrom?: Maybe<Scalars['DateTime']>;
  broadcastTo?: Maybe<Scalars['DateTime']>;
  cooldown: Scalars['Int'];
  maximumNotificationsPerUser?: Maybe<Scalars['Int']>;
  notificationTitle?: Maybe<Scalars['String']>;
  notificationText?: Maybe<Scalars['String']>;
  notificationImage?: Maybe<Scalars['String']>;
  listImage?: Maybe<Scalars['String']>;
  listTitle?: Maybe<Scalars['String']>;
  listText?: Maybe<Scalars['String']>;
  detailBlocks?: Maybe<Array<DetailBlockInput>>;
  detailUrl?: Maybe<Scalars['String']>;
  inAppEvent?: Maybe<Scalars['String']>;
  beacons?: Maybe<Array<Scalars['ID']>>;
  applications?: Maybe<Array<Scalars['ID']>>;
};

export type DetailBlockInput = {
  type: DetailBlockType;
  text?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
};

export enum DetailBlockType {
  Title = 'Title',
  Heading = 'Heading',
  Paragraph = 'Paragraph',
  UnorderedList = 'UnorderedList',
  OrderedList = 'OrderedList',
  Image = 'Image',
  Button = 'Button'
}


export type EventInput = {
  eventType: SdkEventType;
  timestamp: Scalars['DateTime'];
  beaconNamespace?: Maybe<Scalars['String']>;
  beaconInstance?: Maybe<Scalars['String']>;
  campaignId?: Maybe<Scalars['String']>;
  hasBluetoothTurnedOn: Scalars['Boolean'];
  hasInternetConnection: Scalars['Boolean'];
  hasLocationPermission: Scalars['Boolean'];
  hasNotificationPermission: Scalars['Boolean'];
};

export type AttributeInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type CreateApplicationInput = {
  name: Scalars['String'];
  key: Scalars['String'];
  accountId: Scalars['ID'];
};

export type UpdateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

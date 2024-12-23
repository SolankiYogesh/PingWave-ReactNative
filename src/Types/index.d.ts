import type {ContractDataType} from '@reeva/core'
import type {UserType} from '@reeva/shared'

type RootStackParamList = {
  Auth: {
    isLogOut: boolean
  }
  ChatScreen: {
    isDrawer: boolean
  }
  ContactListScreen: {
    isDrawer?: boolean
    isFromTemplate?: boolean
    isFromOfferScreen?: boolean
    isFromSendTemplate?: boolean
    payload?: any
    item?: any
    offerItem?: any
  }
  VerificationScreen: {
    isRegister?: boolean
    email: string
    isSocialLogin?: {
      isApple?: boolean
      isGoogle?: boolean
      google_access_token?: string
      email?: string
      profile_image?: string
    }
    loginData?: any
    isLogin?: boolean
  }

  LoginScreen: undefined
  PagerScreen: undefined
  RegisterScreen: {
    isGoogle?: {
      email?: string
      givenName?: string
      familyName?: string
    }
    isApple?: boolean
    isSocialLogin?: {
      isApple?: boolean
      isGoogle?: boolean
      google_access_token?: string
      email?: string
      profile_image?: string
    }
  }
  AddEditContactScreen?: {
    item?: ContactType
  }
  ForgotPassScreen: undefined
  NewPasswordScreen: {
    email: string
    data?: {
      token: string
    }
  }

  FeedbackScreen: undefined
  ContactDetailsScreen: {
    contactItem?: ContactType
    isOfferScreen?: boolean
    isFromOfferScreen?: {
      cache_id?: string
      isFromOfferScreen?: boolean
    }
    offerItem?: any
    isTemplateScreen?: boolean
    isPreviewOnly?: boolean
    isFromSendTemplate?: {
      isFromSendTemplate?: boolean
      payload?: any
    }
    data?: ContactType
    item?: any
  }
  BrokerRegisterScreen: {
    isSocialLogin?: {
      isApple?: boolean
      isGoogle?: boolean
      google_access_token?: string
      email?: string
      profile_image?: string
    }
    email: string
    isGoogle?: boolean
    isApple?: boolean
    password?: string
    userLicence?: string
    address?: string
    phoneNumber?: string
    lastName?: string
    firstName?: string
    phoneNumberCountry: string
  }
  Drawer: undefined
  PremiumPlanScreen: {
    isDrawer?: boolean
    initialIndex?: number
  }
  SettingScreen: {
    isDrawer?: boolean
  }
  UserProfileScreen: undefined
  EditProfileScreen: {
    userData: UserType
  }
  ChangePasswordScreen: undefined
  OffersScreen?: {
    data?: ContactType
    isDrawer?: boolean
  }
  EmailTemplateScreen: {
    isDrawer?: boolean
    contactItem?: ContactType
  }
  OfferDetailsScreen: {
    contactItem?: MixContractAndContact
    isOfferScreen?: boolean
    isFromOfferScreen?: boolean
    isPreviewOnly?: boolean
    isFromSendTemplate?: boolean
    item?: any
  }
  ReminderPreferenceScreen: undefined
  PreferredTitleCompany: {
    isRegister?: boolean
    email: string
    isSocialLogin?: {
      isApple?: boolean
      isGoogle?: boolean
      google_access_token?: string
      email?: string
      profile_image?: string
    }
    userData?: any
    isLogin?: boolean
    brokerData?: any
  }
  ReminderScreen: {
    contract: ContractDataType
  }
  ReminderListScreen: {
    contract: ContractDataType
  }
  ReviewScreen: {
    isDrawer?: boolean
    item: ContractDataType
    isChildIsOfferScreen?: boolean
  }
}
export type MixContractAndContact = {} & ContactType & ContractDataType

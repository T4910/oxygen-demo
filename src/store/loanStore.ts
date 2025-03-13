import { create } from 'zustand'

type CustomerInfo = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  ippiNumber: string
  bvn: string
  stateOfOrigin: string
}

type LoanState = {
  employer: string
  amount: string
  duration: string
  step: number
  paymentPlanData: {
    loanAmount: string
    monthlyPayment: string
    duration: string
    interestRate: string
    repaymentDate: string
  }
  currentStep: number
  totalSteps: number
  customerInfo: CustomerInfo
  setEmployer: (employer: string) => void
  setAmount: (amount: string) => void
  setDuration: (duration: string) => void
  setStep: (step: number) => void
  nextStep: () => void
  resetForm: () => void
  setCurrentStep: (step: number) => void
  prevStep: () => void
  updateCustomerInfo: (field: keyof CustomerInfo, value: string) => void
}

export const useLoanStore = create<LoanState>((set) => ({
  employer: '',
  amount: '',
  duration: '',
  step: 1,
  paymentPlanData: {
    loanAmount: 'N160,000',
    monthlyPayment: 'N24,000',
    duration: '6 months',
    interestRate: '12.5%',
    repaymentDate: '30-07-2024'
  },
  currentStep: 1,
  totalSteps: 2,
  customerInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bvn: '',
    ippiNumber: '',
    stateOfOrigin: ''
  },
  setEmployer: (employer) => set({ employer }),
  setAmount: (amount) => set({ amount }),
  setDuration: (duration) => set({ duration }),
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ 
    currentStep: Math.min(state.currentStep + 1, state.totalSteps) 
  })),
  resetForm: () => set({ 
    employer: '', 
    amount: '', 
    duration: '', 
    step: 1 
  }),
  setCurrentStep: (step) => set({ currentStep: step }),
  prevStep: () => set((state) => ({ 
    currentStep: Math.max(state.currentStep - 1, 1) 
  })),
  updateCustomerInfo: (field, value) => set((state) => ({
    customerInfo: {
      ...state.customerInfo,
      [field]: value
    }
  }))
})) 
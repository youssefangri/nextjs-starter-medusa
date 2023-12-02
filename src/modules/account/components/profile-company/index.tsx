import { useAccount } from "@lib/context/account-context"
import Input from "@modules/common/components/input"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm, useWatch } from "react-hook-form"
import AccountInfo from "../account-info"


// type MyInformationProps = {
//   customer: Omit<MedusaCustomer, "password_hash"> & Customer
// }


type UpdateCustomerVatIdFormData = {
  company_name: string
}

const ProfileCompany: React.FC<any> = ({ customer }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UpdateCustomerVatIdFormData>({
    defaultValues: {
      company_name: customer.company_name,
    },
  })

  const { refetchCustomer } = useAccount()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset({
      company_name: customer.company_name,
    })
  }, [customer, reset])

  const company_name = useWatch({
    control,
    name: "company_name",
  })

  const updateCompanyName = (data: UpdateCustomerVatIdFormData) => {
    return update(
      {
        id: customer.id,
        ...data,
      },
      {
        onSuccess: () => {
          refetchCustomer()
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(updateCompanyName)} className="w-full">
      <AccountInfo
        label="Company Name"
        currentInfo={`${customer.company_name}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-2">
          <Input
            label="Company Name"
            {...register("company_name", {
              required: true,
            })}
            defaultValue={company_name}
            errors={errors}
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileCompany

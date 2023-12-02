import { useAccount } from "@lib/context/account-context"
import { Customer } from "types/global"
import { Customer as MedusaCustomer } from "@medusajs/medusa"
import Input from "@modules/common/components/input"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm, useWatch } from "react-hook-form"
import AccountInfo from "../account-info"


// type MyInformationProps = {
//   customer: Omit<MedusaCustomer, "password_hash"> & Customer
// }


type UpdateCustomerVatIdFormData = {
  vat_id: string
}

const ProfileVat: React.FC<any> = ({ customer }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UpdateCustomerVatIdFormData>({
    defaultValues: {
      vat_id: customer.vat_id,
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
      vat_id: customer.vat_id,
    })
  }, [customer, reset])

  const vat_id = useWatch({
    control,
    name: "vat_id",
  })

  const updateVatId = (data: UpdateCustomerVatIdFormData) => {
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
    <form onSubmit={handleSubmit(updateVatId)} className="w-full">
      <AccountInfo
        label="VAT ID"
        currentInfo={`${customer.vat_id}`}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-2">
          <Input
            label="VAT ID"
            {...register("vat_id", {
              required: true,
            })}
            defaultValue={vat_id}
            errors={errors}
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileVat

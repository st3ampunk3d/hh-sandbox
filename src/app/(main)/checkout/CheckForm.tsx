"use client"

import { FormEvent } from "react"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { User } from "@/app/lib/interface"
import { useParams } from "next/navigation"
import { setTimeout } from "timers" 

export default function CheckForm() {
    const router = useRouter()
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert("You make a submission")
        router.push("/thankyou")
    }
    return(
                        <form onSubmit={handleSubmit}>
                            <fieldset className="border p-4 ">
                            <legend className="text-xl font-semibold text-gray-800">Shipping</legend>
                            <div className="checkout__name">
                                <label className="block">First Name
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="fname" required />
                                </label>
                                <label className="block">Last Name
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="lname" required />
                                </label>
                            </div>
                            <div className="checkout__address">
                                <label className="block">Street
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="street" required />
                                </label>
                                <label className="block">City
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="city" required />
                                </label>
                                
                                <label className="block">State
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="state" required />
                                </label>
                                
                                <label className="block">Zip
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="zip" id="zip" required />
                                </label>
                            </div>
                            </fieldset>
                            <fieldset className="border p-4">
                            <legend className="text-xl font-semibold text-gray-800">Payment</legend>
                                <label className="block">Card number
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="cardNumber" pattern="[0-9]{7,}" required />
                                </label>
                                
                                <label className="block">Expiration
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="expiration" pattern="[0-9]{1,2}\/[0-9]{1,2}" required />
                                </label>
                                
                                <label className="block">Security Code  
                                    <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm" name="code" pattern="[0-9]{3,}" required />
                                </label>
                            </fieldset>
                            <fieldset className="border p-4">
                            <legend className="text-xl font-semibold text-gray-800">Order Summary</legend>
                            <ul>
                                <li>
                                <label className="block">All Items :</label>
                                <p className="cartTotal" id="cartTotal"></p>
                                </li>
                                <li>
                                <label className="orderTotal block"><b>Order Total:</b></label>
                                <p id="orderTotal"></p>
                                </li>
                            </ul>
                            </fieldset>
                            <div className="flex justify-center">
                                <button className="bg-green-800 m-3 ml-0 mr-0 text-2xl rounded-lg p-2 flex justify-center items-center md:hover:bg-green-700 text-sky-100 w-[200px] lg:w-[270px]">Checkout</button>
                            </div>
                        </form>
    )
}
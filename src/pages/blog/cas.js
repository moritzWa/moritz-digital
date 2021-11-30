import * as React from "react"



export default function Component () {

  if(typeof window !== "undefined"){
    return window.location.href = '/cas';
  }

}
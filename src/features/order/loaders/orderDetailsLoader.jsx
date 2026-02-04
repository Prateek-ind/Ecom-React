

export const orderDetailsLoader = ({ request }) => {
  const orderId = new URL(request.url).searchParams.get("orderId");

  if(!orderId){
    throw new Error("Order Id missing")
  }
  return ({orderId})

  }


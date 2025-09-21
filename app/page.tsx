import { Button } from "@/components/ui/button"
import Link from "next/link";

export function LinkAsButton(props: any) {
  console.log(props)
  const {children, className} = props
  return (
   <div className={className}>
     <Button asChild>
      <Link href="/login">{children}</Link>
    </Button>
   </div>
  )
}

export default function Home() {
  let hello;

  return (

    <div>
    <LinkAsButton className = "flex flex-wrap items-center justify-center min-h-screen">Login here</LinkAsButton>
    </div>
  );
}

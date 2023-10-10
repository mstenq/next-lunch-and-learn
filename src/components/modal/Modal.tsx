'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const handleDocumentClick = (e: MouseEvent) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  useEffect(() => {
    const modal = dialogRef.current;
    modal?.showModal();
    modal?.addEventListener("click", handleDocumentClick);
    return () => {
      modal?.removeEventListener("click", handleDocumentClick);
    }
  },[dialogRef])


  return (
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      className="backdrop:bg-black/60 p-4 rounded-lg"
    >

        {children}
    </dialog>
  )
}

import { useEffect, useRef } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  closeByBackdrop?: boolean;
  closeByEscape?: boolean;
}

/**
 * A reusable modal dialog component built on the native HTML `<dialog>` element.
 *
 * Features:
 * - Controlled open/close state via `isOpen`
 * - Optional confirm action
 * - Configurable backdrop and Escape key behavior
 * - Accessible native dialog behavior using `showModal()`
 *
 * @component
 *
 * @example
 * ```tsx
 * <Dialog
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   onConfirm={handleSave}
 *   title="Delete item"
 *   description="Are you sure you want to delete this item?"
 * >
 *   This action cannot be undone.
 * </Dialog>
 * ```
 */

const Dialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  closeByBackdrop = true,
  closeByEscape = true,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    const handleCancel = (e: Event) => {
      if (!closeByBackdrop) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !closeByEscape) {
        e.preventDefault();
      }
    };

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, closeByBackdrop, closeByEscape]);

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <dialog ref={dialogRef}>
      <form method="dialog" onSubmit={handleConfirm}>
        {(title || description) && (
          <header>
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}
          </header>
        )}
        <div>{children}</div>
        <footer>
          <button type="button" onClick={onClose} className="outline">
            {cancelText}
          </button>
          {onConfirm && (
            <button type="submit" value="confirm">
              {confirmText}
            </button>
          )}
        </footer>
      </form>
    </dialog>
  );
};

export default Dialog;

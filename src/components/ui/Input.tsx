import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  icon?: ReactNode;
}

export const handleNumberFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  if (e.target.value === '0') {
    try {
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;
      nativeSetter?.call(e.target, '');
      e.target.dispatchEvent(new Event('input', { bubbles: true }));
    } catch {
      e.target.value = '';
    }
  }
};

export const handleNumberBlur = (e: React.FocusEvent<HTMLInputElement>, defaultValue = '0') => {
  if (e.target.value === '' || e.target.value === null || e.target.value === undefined) {
    try {
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;
      nativeSetter?.call(e.target, defaultValue);
      e.target.dispatchEvent(new Event('input', { bubbles: true }));
    } catch {
      e.target.value = defaultValue;
    }
  }
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, id, icon, onFocus, onBlur, value, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (type === 'number') {
        handleNumberFocus(e);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (type === 'number') {
        handleNumberBlur(e, '0');
      }
      onBlur?.(e);
    };

    const isControlled = value !== undefined;
    const displayValue = (type === 'number' && isFocused && (value === 0 || value === '0'))
      ? ''
      : value;

    const inputElement = (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            'flex h-10 w-full rounded-lg border bg-white dark:bg-slate-800/50 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all duration-200',
            'focus:outline-none focus:ring-1 focus:ring-amber-500/30 focus:border-amber-500/60',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
              : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600',
            icon && 'pl-10',
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...(isControlled ? { value: displayValue } : {})}
          {...props}
        />
      </div>
    );
    
    if (label) {
      return (
        <div className="w-full">
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
          {inputElement}
        </div>
      );
    }

    return inputElement;
  }
);

Input.displayName = 'Input';

export { Input };

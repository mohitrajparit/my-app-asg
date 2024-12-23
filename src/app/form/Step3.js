import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formSlice';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Step3() {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleToggleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.checked }));
  };

  return (
    <div className='w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8'>
      <h2 className='p-4 mb-4'>Step 3: Preferences</h2>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <input
            type="checkbox"
            name="subscribeNewsletter"
            checked={formData.subscribeNewsletter || false}
            onChange={handleToggleChange}
            className=" p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          </TooltipTrigger>
        <TooltipContent>
          <h1>Check if you want to subscribe to Newsletter</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
          Subscribe to Newsletter
        </label>
        <label className="flex items-center gap-2">
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms || false}
            onChange={handleToggleChange}
            className=" p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          </TooltipTrigger>
        <TooltipContent>
          <h1>Check if you agree to terms</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
          Agree to Terms and Conditions
        </label>
      </div>
    </div>
  );
}

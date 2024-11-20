/** This interface provides typing for components that will change Modal state */
export interface GenericModalProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
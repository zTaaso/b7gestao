import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { TOpen } from 'react-native-modalize/lib/options';

type toggleModalType = () => void;
type ModalName = 'menu' | 'workflow';

interface DashboardContextTypes {
  openDashboardModal: (modalName: ModalName) => void;
  closeDashboardModal: (modalName: ModalName) => void;
  bottomSheetRef: React.RefObject<Modalize | undefined>;
  workflowModalRef: React.RefObject<Modalize | undefined>;
}

export const DashboardContext = React.createContext<DashboardContextTypes>(
  {} as DashboardContextTypes
);

export const useToggleDashboardModal = () => useContext(DashboardContext);

const DashboardProvider: React.FC = ({ children }) => {
  const bottomSheetRef = React.useRef<Modalize>();
  const workflowModalRef = React.useRef<Modalize>();

  function openDashboardModal(modalName: ModalName) {
    if (modalName === 'menu') {
      bottomSheetRef.current?.open();
      return;
    }
    if (modalName === 'workflow') {
      workflowModalRef.current?.open();
    }
  }

  function closeDashboardModal(modalName: ModalName) {
    if (modalName === 'menu') {
      bottomSheetRef.current?.close();
      return;
    }
    if (modalName === 'workflow') {
      workflowModalRef.current?.close();
    }
  }

  const state = {
    openDashboardModal,
    closeDashboardModal,
    bottomSheetRef,
    workflowModalRef,
  };

  return <DashboardContext.Provider value={state}>{children}</DashboardContext.Provider>;
};

export default DashboardProvider;

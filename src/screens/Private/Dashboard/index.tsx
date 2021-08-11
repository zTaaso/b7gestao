import React, { useState, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';

import StaticBackGround from './components/StaticBackground/index';
import Balance from './components/Balance/index';
import WorkflowPreview from './components/WorkflowPreview';
import CreditCard from './components/CreditCard/index';
import ButtonSection from './components/ButtonSection';
import InfoBoxes from '~/src/components/InfoBoxes';

import Menu from './screens/Menu/index';
import WorkflowScreen from './screens/Workflow';

import { useToggleDashboardModal } from '~/src/context/DashboardContext';

const Dashboard: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { bottomSheetRef, workflowModalRef } = useToggleDashboardModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <StaticBackGround />;
  }

  return (
    <>
      <Modalize
        ref={bottomSheetRef}
        modalStyle={{
          backgroundColor: '#1a1f24',
        }}
        snapPoint={480}
      >
        <Menu />
      </Modalize>

      <Modalize
        ref={workflowModalRef}
        modalStyle={{
          backgroundColor: '#1a1f24',
        }}
        snapPoint={400}
      >
        <WorkflowScreen />
      </Modalize>

      <StaticBackGround>
        <Balance />
        <WorkflowPreview />
        <CreditCard />
        <ButtonSection />
        {/* <InfoBoxes /> */}
      </StaticBackGround>
    </>
  );
};

export default Dashboard;

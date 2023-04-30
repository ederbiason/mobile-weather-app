import { IHandles } from 'react-native-modalize/lib/options'

import { IModalize } from './Modalize.props'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useModalize = (
  modalizeRef: React.RefObject<IHandles>
): IModalize => {
  const { getTimeAndTemperature, clearData } = useTimeAndTemperature()
  const closeModalize = (city: string): void => {
    clearData()
    void getTimeAndTemperature({ city })
    modalizeRef.current?.close()
  }

  return {
    closeModalize
  }
}

import { FieldTypes } from '../../types/machine';
import MachineTypeReducer, {
    MachineTypesState,
    addNew,
    deleteMachineType,
    updateMachineType,
    addNewField,
  } from './MachineTypesSlice';
  import {
    data} from './mock';
  
  describe('Machine Type reducer', () => {
    const initialState: MachineTypesState = { machines:  data}
    it('should handle initial state', () => {
      expect(MachineTypeReducer(undefined, { type: 'unknown' })).toEqual({
        machines: []
      });
    });

    it('should handle add new machine type', () => {
      const actual = MachineTypeReducer(initialState, addNew());
      expect(actual.machines.length).toEqual(5);
    });
    it('should handle delete machine type', () => {
        const typeToBeDeleted = initialState.machines[0].id;
        const actual = MachineTypeReducer(initialState, deleteMachineType({ id: typeToBeDeleted }));
        const findType = actual.machines.find(machine => machine.id === typeToBeDeleted);
        expect(actual.machines.length).toEqual(3);
        expect(findType).toBeFalsy();
    });
    it('should update machine type', () => {
        const typeToBeUpdated = initialState.machines[0].id;
        const actual = MachineTypeReducer(initialState, updateMachineType({ id: typeToBeUpdated, key: 'type', value: 'New Type' }));
        const findType = actual.machines.find(machine => machine.id === typeToBeUpdated);
        expect(findType?.type).toEqual('New Type');
    })
    it('should add new attribute field', () => {
        const typeToBeUpdated = initialState.machines[0].id;
        const actual = MachineTypeReducer(initialState, addNewField({ id: typeToBeUpdated, type: FieldTypes.text }));
        const findType = actual.machines.find(machine => machine.id === typeToBeUpdated);
        expect(findType?.blueprint.length).toEqual(1);
        expect(findType?.blueprint[0].fieldType).toEqual(FieldTypes.text);
    })
});
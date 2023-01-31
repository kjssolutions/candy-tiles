import { atom } from 'recoil';
import { GRID_NUMBER } from '../../../config';

export const tileListEditorState = atom<LevelTile[]>({
	key: 'tileListEditor',
	default: Array(GRID_NUMBER).fill({ type: 'Normal' } as LevelTile),
});

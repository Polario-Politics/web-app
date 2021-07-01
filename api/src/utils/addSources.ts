import Source from '../models/source';
import { sourceData } from './sourceData';

const addSources = async (): Promise<void> => {

    sourceData.forEach(async (source) => {
        const newSource = await Source.create(source);
        console.log(newSource);
    });
    
}

export default addSources;
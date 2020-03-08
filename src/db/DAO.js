import {config} from "../config";

export class DAO {

    async resolveRelationsForArray() {
        throw new Error('You should implement resolveRelationsForArray');
    }
    
    async getResolvedListResult(collection, offset) {
        let collectionCount = collection.clone();
        let count = await collectionCount.offset(offset).limit(config.db.limit + 1).count();
        let data = await this.resolveRelationsForArray(
            await collection.offset(offset).limit(config.db.limit).toArray()
        );
        return {
            hasMore: config.db.limit < count,
            data: data
        }
    }

    async getListResult(collection, offset) {
        let count = await collection.count();
        let data = await collection.offset(offset).limit(config.db.limit).toArray();
        return {
            hasMore: (config.db.limit + offset) < count,
            data: data
        }
    }
}

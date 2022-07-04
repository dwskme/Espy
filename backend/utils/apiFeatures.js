class ApiFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    search(){
        const keyword = this.queryString.keyword ? {
            name:{
                $regex: this.queryString.keyword,
                $options: 'i',
            },
        }:{};
        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const queryCopy = {...this.queryString};
        // Remove Field for Category
        const removeField = ["keyword", "limit", "page"];
        removeField.forEach(key=> delete queryCopy[key]);

        // Filter for Rating


        this.query = this.query.find(queryCopy);
        return this;
    }

    pagination(resultPerPage){
        const currentPage = Number(this.queryString.page) || 1;
        const skip = resultPerPage * (currentPage-1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }


};

module.exports = ApiFeatures;
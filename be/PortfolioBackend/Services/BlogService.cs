using PortfolioBackend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace PortfolioBackend.Services
{
    public class BlogService
    {
        private readonly IMongoCollection<Blog> _blogCollection;

        public BlogService(IMongoClient mongoClient)
        {
            var mongoDatabase = mongoClient.GetDatabase("PortBlogs");

            _blogCollection = mongoDatabase.GetCollection<Blog>("BlogContent");
        }

        public async Task<List<Blog>> GetAsync() =>
            await _blogCollection.Find(_ => true).ToListAsync();

        public async Task<Blog?> GetAsync(string id) =>
            await _blogCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Blog newBlog) =>
            await _blogCollection.InsertOneAsync(newBlog);

        public async Task UpdateAsync(string id, Blog updatedBlog) =>
            await _blogCollection.ReplaceOneAsync(x =>  x.Id == id, updatedBlog);

        public async Task RemoveAsync(string id) =>
            await _blogCollection.DeleteOneAsync(x => x.Id == id);
    }
}

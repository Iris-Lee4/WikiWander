using WikiWander.Models;

namespace WikiWander.Repositories
{
    public interface IArticleRepository
    {
        List<Article> GetAll();
        Article GetById(int id);
    }
}
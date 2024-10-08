using WikiWander.Models;

namespace WikiWander.Repositories
{
    public interface IMessageRepository
    {
        void Add(Message message);
        void Delete(int id);
        List<Message> GetAll();
        Message GetById(int id);
        void Update(Message message);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TodoApp
{
  public class TodoAppService : ApplicationService, ITodoAppService
  {
    private readonly IRepository<TodoItem, Guid> _todoItemRepository;

    public TodoAppService(IRepository<TodoItem, Guid> todoItemRepository)
    {
      _todoItemRepository = todoItemRepository;
    }

    public async Task<List<TodoItemDto>> GetListAsync()
    {
      var items = await _todoItemRepository.GetListAsync();
      return items
          .Select(item => new TodoItemDto
          {
            Id = item.Id,
            EnText = item.EnText,
            ArText = item.ArText
          }).ToList();
    }

    public async Task<TodoItemDto> CreateAsync(string enText, string arText)
    {
      var todoItem = await _todoItemRepository.InsertAsync(
        new TodoItem
        {
          EnText = enText,
          ArText = arText
        }
      );

      return new TodoItemDto
      {
        Id = todoItem.Id,
        EnText = todoItem.EnText,
        ArText = todoItem.ArText
      };
    }

    public async Task DeleteAsync(Guid id)
    {
      await _todoItemRepository.DeleteAsync(id);
    }

  }
}

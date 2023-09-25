using System;
using Volo.Abp.Domain.Entities;

namespace TodoApp
{
  public class TodoItem : BasicAggregateRoot<Guid>
  {
    public string EnText { get; set; }
    public string ArText { get; set; }
  }
}

using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace TodoApp.MongoDB;

[ConnectionStringName("Default")]
public class TodoAppMongoDbContext : AbpMongoDbContext
{

  public IMongoCollection<TodoItem> TodoItems => Collection<TodoItem>();


  protected override void CreateModel(IMongoModelBuilder modelBuilder)
  {
    base.CreateModel(modelBuilder);

    modelBuilder.Entity<TodoItem>(b =>
    {
      b.CollectionName = "TodoItems";
    });

  }
}

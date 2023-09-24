using TodoApp.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace TodoApp.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(TodoAppMongoDbModule),
    typeof(TodoAppApplicationContractsModule)
    )]
public class TodoAppDbMigratorModule : AbpModule
{
}

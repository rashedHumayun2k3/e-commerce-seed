using Ec.Data.Context;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Ec.Data.Repositories;
using Ec.Data.Entities;
using Ec.Data.Repositories.Implementations;


namespace Ec.Data
{
	public static class Startup
	{
		public static IServiceCollection AddEcData(this IServiceCollection services, IConfiguration configuration)
		{
			// Add services to the container.
			services.AddSingleton<EcDbContext>();
			services.Configure<ConnectionStringOptions>(configuration.GetSection(ConnectionStringOptions.Position));

			services.AddSingleton<EcMongoDbContext>();
			services.Configure<MongoDbConfig>(configuration.GetSection("MongoDB"));

			AddEcRepositories(services, configuration);
			return services;
		}
		public static IServiceCollection AddEcRepositories(this IServiceCollection services, IConfiguration configuration)
		{
			services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
			services.AddScoped<ICategoryAttributesRepository, CategoryAttributesRepository>();
			services.AddScoped<IAuthorRepository, AuthorRepository>();
			services.AddScoped<IPublisherRepository, PublisherRepository>();
            services.AddScoped<IColorRepository, ColorRepository>();
            return services;
		}
	}
}

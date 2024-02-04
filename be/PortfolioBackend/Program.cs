using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using PortfolioBackend.Models;
using PortfolioBackend.Services;


var builder = WebApplication.CreateBuilder(args);

// adding MongoDB
var connectionString = Environment.GetEnvironmentVariable("MONGODB_URI");

if (string.IsNullOrWhiteSpace(connectionString))
{
    Console.WriteLine("You must set your 'MONGODB_URI' environment variable.");
    Environment.Exit(0);
}

var client = new MongoClient(connectionString);

// Adding singleton for Dependency Injection for Mongo Client
builder.Services.AddSingleton<IMongoClient>(client);

// Adding singleton for BlogService
builder.Services.AddSingleton<BlogService>();

// Add services to the container.
builder.Services.Configure<BlogDatabaseSettings>(
    builder.Configuration.GetSection("BlogDatabase"));


builder.Services.AddAuthorization();

builder.Services.AddControllers();

//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

// HTTP request Pipeline
app.UseHttpsRedirection();

// Authentication and Authorization
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();


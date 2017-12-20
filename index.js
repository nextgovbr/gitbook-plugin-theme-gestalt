<<<<<<< HEAD
module.exports =
{
    hooks:
    {
        config: function(config)
        {
            config.styles = config.styles;
            return config;
        }
    }
};


=======
module.exports =
{
    hooks:
    {
        config: function(config)
        {
            config.styles = config.styles || config.pluginsConfig['theme-default'].styles;
            return config;
        }
    }
};


>>>>>>> b35682879c9b64e32d4f1e144bc858a4a4ee39c8

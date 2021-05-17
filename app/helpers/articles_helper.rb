module ArticlesHelper

    def article_order
        @articles.order(updated_at: :desc)
    end

end

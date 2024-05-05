<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
console.info("analyse");
</script>
<style scoped>
section h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
}

section p {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
}

section h3 {
    font-size: 2rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>

<template>
    <div id="header-container" class="content-center" style="padding: 5em; height: 70vh">
        <div id="header-logo" class="-z-50 absolute h-full bg-cover w-full top-0 right-0" style="
                background-image: url(https://s2.loli.net/2023/11/29/iH1mlfOEUoSjuFv.png);
                background-position: 50vh 50%;
                background-repeat: no-repeat;
            "></div>
        <div id="header-warpper" class="relative flex items-center content-center text-center z-auto">
            <div id="header-img">
                <img src="https://s2.loli.net/2023/12/01/scafluLSBnGyJkq.png" style="
                        min-height: 30vh;
                        height: 30lvw;
                        right: 10vw;
                        top: 0;
                        z-index: 0;
                    " class="absolute" />
            </div>
            <div id="header-content" class="" style="
                    margin-right: 60%;
                    margin-left: 5%;
                    margin-top: 4rem;
                    z-index: 0;
                ">
                <h1 class=" " style="font-size: 7svh; line-height: 1.1">
                    <p>Impersonation</p>
                    <p>Resale</p>
                    <p>Patchwork</p>
                </h1>
                <p class="mt-16 mb-4 text-xl">
                    We're desperate to stop these.
                </p>
            </div>
        </div>
    </div>
    <section>
        <div id="cases-report" class=" ">
            <p class=" text-center">
                China's copyright awareness has been criticized by the world,
                with the following ringleaders in the MC UGC community
            </p>
            <Tabs default-value="zhang" class="space-y-4 z-10">
                <TabsList style="" class="w-full bg-transparent">
                    <TabsTrigger value="zhang"> Zhang </TabsTrigger>
                    <TabsTrigger value="yun"> Yun </TabsTrigger>
                    <TabsTrigger value="pian"> Pian </TabsTrigger>
                    <TabsTrigger value="mass"> The Mass </TabsTrigger>
                </TabsList>
                <TabsContent value="zhang" class="space-y-4">
                    Misconduct: 张嫂小雨(ZhangSao Xiaoyu) used the splicing of
                    high-definition modern style textures such as TMEO, UMSOEA,
                    etc., to impersonate her own original works. She broadcasted
                    on the Internet, promoted them, and slandered other authors.
                    She also entrusted 殷南昭(Yin Nan Zhao) to sell her
                    Minecraft integration package on the crowdfunding platform,
                    which contained a large number of unauthorized domestic and
                    foreign mods, shaders, and textures. Filthy lucre: About 50w
                    RMB (84145 USD)
                </TabsContent>
                <TabsContent value="yun" class="space-y-4">
                    云鹤亭社(Yun Ting He She) is a website that sells well-known
                    MC resource packs, shaders, game integration packs, maps,
                    and community models on its website. The website’s profits
                    are considerable, and its browsing and download volumes are
                    also very large. In addition, 云鹤亭社 also provides several
                    levels of VIP for people who want more resources, such as
                    PTGI, BSL, ... Filthy lucre: About 30w RMB (42072
                    USD)</TabsContent>

                <TabsContent value="pian" class="space-y-4"><span>
                        <h3>
                            <p>Know it all:&nbsp;</p>
                            <p>
                                <span><a href="https://www.bilibili.com/read/cv23207120/">Pianmu made a very poor
                                        quality video
                                        tutorial on electric generation, but he
                                        did not accept any criticism or
                                        suggestions, but arrogantly said that he
                                        was better than others, and said to the
                                        famous electric generation logistics
                                        “I’m better than you”, and continued to
                                        send private messages to show off the
                                        increase of fans and his behavior will
                                        not be punished.</a></span><br />
                            </p>
                            <p>
                                <span><br /></span>
                            </p>
                        </h3>
                        <h3><span>Stealing other people’s Mod:&nbsp;</span></h3>
                        <p>
                            <span>Pianmu integrated other people’s Mod into his
                                own Mod pack, and then sold it on Douyin,
                                violating the game’s Mod usage agreement, and
                                infringing on the original author’s intellectual
                                property and labor achievements.</span>
                        </p>
                        <p><br /></p>
                        <h3>Misleading minors:&nbsp;</h3>
                        <blockquote>
                            T<span>here are many underage MC players among
                                Pianmu’s fans, whose values and intellectual
                                property awareness have not yet been formed, but
                                Pianmu did not give them a positive guidance,
                                but indulged and guided them to become his
                                “filial sons”, defending his evil deeds,
                                damaging their moral outlook and creative
                                literacy.</span>
                            <p><br /></p>
                        </blockquote>
                        <h3>Rampant:</h3>
                        <p>
                            <span>Described his low income on the platform, while
                                pre-ordered a ModelX and publicly said: “Don’t
                                wait until 40 years old to achieve the dream of
                                18 years old”.</span>
                        </p>
                        <p>
                            <span><br /></span>
                        </p>
                        <h3>Filthy lucre:</h3>
                        <p>About 12w RMB (16829 USD)</p>
                    </span>
                </TabsContent>

                <TabsContent value="mass" class="space-y-4">
                    <div data-edit="Col,text" class="ant-col content7-text ant-col-xs-24 ant-col-md-14">
                        <h2>
                            There are many problems in the paid resource market
                            of NetEase's "Minecraft" China Edition, which are
                            mainly manifested in the following aspects:
                        </h2>
                        <h3>
                            The bad behavior of developers: Some developers use
                            the development tools and platforms provided by
                            NetEase to conduct unethical behaviors, such as:
                        </h3>
                        <p>
                            Stealing the skins, mods and texture packs of the
                            community, or releasing low-quality pure color block
                            skins, or even using the fame of deceased famous
                            players (such as Technoblade) to profit.
                        </p>
                        <p>
                            Distributing and forging authorization without the
                            consent of the original authors, or forging the
                            authorization certificate of the original authors,
                            in order to deceive the players.
                        </p>
                        <p>
                            Profiteering by selling the original free or
                            low-priced resources at a high price, or using the
                            resource combination package method, to package
                            multiple resources into a high-priced integration
                            package, thereby obtaining more benefits.
                        </p>
                        <p><br /></p>
                        <h3>
                            The irrational reaction of players: Some players
                            have unreasonable attitudes towards paid resources,
                            such as:
                        </h3>
                        <p>
                            In order to get something for nothing, regardless of
                            quality and originality, they support and use the
                            works of these developers as long as they are free,
                            and even speak and whitewash for them, and use "free
                            supremacy" as a reason to suppress the group that
                            criticizes them, or insult and threaten them on the
                            developer's homepage.
                        </p>
                        <p>
                            For high-quality paid resources, they are unwilling
                            to pay a reasonable price, but choose to use pirated
                            or cracked methods, or conduct malicious bad reviews
                            or refunds in the comment area.
                        </p>
                        <p>
                            The inaction attitude of the official: Although the
                            official has set the minimum threshold for the works
                            of the developers, their own reviewers do not comply
                            with this rule, resulting in many illegal works
                            appearing in the market center, and they also ignore
                            the complaints and feedback of the players, making
                            the high-quality developers and players feel
                            disappointed and angry.
                        </p>
                        <p><br /></p>
                        <h2>Not just at NetEase's "Minecraft"</h2>
                        <p>
                            Playing the tragic drama, expressing their hard work
                            in creation, leaving the world soon, leaving the
                            shader as a heirloom to their disciples, wanting to
                            use the tear-jerking plot to whitewash their
                            infringement behavior or make others believe that
                            this is their own work.
                        </p>
                        <p>
                            Promoting the fake ray-tracing concept, and refusing
                            to correct the concept popularization, taking NVIDIA
                            as the doctrine, and then label their resold
                            resources as "fake ray-tracing" to get more traffic.
                        </p>
                        <p>
                            Making low-tech modifications to the resources, such
                            as changing a few parameters, and thinking that they
                            are extremely smart and have surpassed the
                            contribution of the original author.
                        </p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
    <section>
        <div>
            <h2>This can be changed</h2>
            <p class=" text-center ">An analyse in different perspective we have token</p>
            <Tabs default-value="player" class="space-y-4">
                <TabsList style="" class="w-full bg-transparent">
                    <TabsTrigger value="player"> Player </TabsTrigger>
                    <TabsTrigger value="authors"> Authors </TabsTrigger>
                    <TabsTrigger value="infringers"> Infringers </TabsTrigger>
                    <TabsTrigger value="third"> Platforms </TabsTrigger>
                    <TabsTrigger value="social"> Social context </TabsTrigger>
                </TabsList>
                <TabsContent value="player" class="space-y-4">
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 hidden">
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">$45,231.89</div>
                                <p class="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Subscriptions
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">+2350</div>
                                <p class="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Sales
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <path d="M2 10h20" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">+12,234</div>
                                <p class="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">
                                    Active Now
                                </CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    class="h-4 w-4 text-muted-foreground">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">+573</div>
                                <p class="text-xs text-muted-foreground">
                                    +201 since last hour
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        ●Lack of ability and awareness to consume for the game.
                    </div>
                    <div>
                        ●Lack of convenient channels and platforms for
                        understanding overseas works.
                    </div>
                    <div>
                        ●Language limitation of websites. For example,
                        Curseforge, Modrinth and other platforms are slow to
                        load in mainland China, with a low degree of
                        localization, and the one-click translation function is
                        less effective, and the use of translation tools is more
                        cumbersome, which is unfriendly to non-native
                        English-speaking players, including Chinese players.
                    </div>
                    <div>
                        ●Lack of proper payment channels. Mainland Chinese
                        players generally do not have VISA credit cards and
                        PayPal accounts, and lack simple and convenient means of
                        cross-border payment, making it difficult for them to
                        access content on distribution platforms such as
                        Patreon. At the same time, Patreon cannot be accessed
                        properly using regular means on the mainland,
                        exacerbating the difficulty of payment.
                    </div>
                    <div>
                        ●Low age of player group. The age distribution of the
                        player group in mainland China is generally low,
                        focusing on the age of 9~18 years old, resulting in the
                        following phenomena:
                    </div>
                    <div>
                        1.The player level disconnection is quite serious. Some
                        are still figuring out how to get resources and install
                        them into the game, while others are close to developers
                        and have more efficient communication channels.
                    </div>
                    <div>
                        2.Imitation mentality is prevalent. This also makes many
                        people willing to buy a lot of domestic and foreign
                        excellent resources for the so-called "Ultra Realistic
                        Resource packs" and "AMAZING SHADERS!!", disregarding
                        the actual, long-term and general needs of the game.
                    </div>
                </TabsContent>
                <TabsContent value="authors">
                    <div>
                        ●Lengthy and cumbersome procedures for enforcing rights.
                        The judicial process for copyright protection is
                        lengthy.
                    </div>
                    <div>●Lack of platforms for effective distribution.</div>
                    <div>
                        ●Lack of exposure for works and personal brands. Most
                        authors are at an absolute disadvantage in terms of
                        publicity, fan base, traffic and public relations.
                    </div>
                    <div>
                        ●There is stratification and discontinuity in the level
                        of creativity. The quality of resources created varies.
                    </div>
                    <div>
                        ●Lack of effective community communication. There is no
                        unified communication environment, and they are closed
                        in their own localized circles in small groups.
                    </div>
                    <div>
                        ●The pressure of real life is high, and some people have
                        no time to take care of some infringement phenomena and
                        can only tolerate it.
                    </div>
                </TabsContent>
                <TabsContent value="infringers">
                    <div>
                        ●Low cost, low risk, and high profitability of buying,
                        selling, and stealing resources.
                    </div>
                    <div>
                        ●The infinite reproducibility of digital products allows
                        them to act as "buyers", allowing them to distribute the
                        same file multiple times with only one sponsorship
                        (which is probably not actually their own). Often, these
                        files are not the latest versions, but rather older
                        versions of resources that they have obtained from
                        licensed users, and we won't discuss for the moment for
                        what purpose these licensed users are sharing the
                        resources.
                    </div>
                    <div>
                        ●Imbecile and vain. The lack of technical expertise
                        means that some people prefer stealing the fruits of
                        other people's labor in order to make a profit.
                        Reproducibility can also be applied to "stealing content
                        as part of one's own work".
                    </div>
                    <div>
                        ●Difficulty in legal defense, foreign resources are not
                        directly protected by China's copyright law in mainland
                        China. This makes it difficult to stop infringement in
                        time.
                    </div>
                    <div>
                        ●Low legal awareness. The popularization rate of
                        copyright law in China is low, and in some cases,
                        players have a vague understanding of whether they can
                        divert and redistribute, and may inadvertently
                        redistribute other people's works and become infringers.
                    </div>
                </TabsContent>
                <TabsContent value="third">
                    <div>
                        ●Difficulty in applying the law. Foreign copyright laws
                        are not directly applicable in China, and the community
                        does not have the judicial power to determine whether
                        "suspected infringement" is an infringement of
                        copyright, so the crime of suspicion is not punishable.
                    </div>
                    <div>
                        ●Difficulty in auditing. Sponsored platforms such as
                        Afdian lack relevant professionals to identify the
                        infringement, and there are no industry authorities to
                        assist in the audit.
                    </div>
                    <div>
                        ●Manpower shortage. Video platforms such as TikTok and
                        Bilibili are unable to make a judgment on infringement
                        due to the excessive amount of content.
                    </div>
                </TabsContent>
                <TabsContent value="social">
                    <div>
                        ●NetEase, as the operator of Minecraft in China, does not
                        have the authority to authorize community resources, and at
                        the same time, does not regulate the distribution of
                        Minecraft community resources on the NetEase platform and
                        the public platform on the Internet, or rather, let it go.
                    </div>
                    <div>

                        ●The public third-party launcher makes it possible for
                        players to conveniently download cf, modrinth and other
                        platform resources. </div>
                    <div>
                        ●China is gradually carrying out
                        real-name Internet access due to the phenomenon of Internet
                        violence, so intellectual property infringement must be able
                        to find the infringer behind the infringement.
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
</template>

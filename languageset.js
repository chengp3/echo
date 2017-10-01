var textSet = {
    "english": {
        "Language": "English",
        "Title": "EchoDemo",
        "Theme": "How echo chambers emerge from social media",
        "Scenario": "Scenario",
        "Default": "Default",
        "AdvancedParameters": "Advanced Parameters",
        "Tolerance": "Tolerance",
        "ToleranceDiscription": "Messages reflecting opinions within this range from an agent’s own opinion are considered as concordant, otherwise as discordant. Concordant messages can influence an agent’s own opinion. Furthermore, an agent will occasionally unfriend neighbors who post discordant messages.",
        "Low": "Low",
        "Medium": "Medium",
        "High": "High",
        "Influence": "Influence",
        "InfluenceDiscription": "An agent’s opinion is updated to become more similar, on average, to those reflected in concordant messages from neighbors. The influence controls how fast this happens.",
        "Off": "Off",
        "Weak": "Weak",
        "Strong": "Strong",
        "Unfriending": "Unfriending",
        "UnfriendingDiscription": "This parameter regulates how often an agent will unfriend a neighbor who posts a discordant message, and replace it with a randomly selected new friend.",
        "Never": "Never",
        "Sometimes": "Sometimes",
        "Often": "Often",
        "Progressive": "Progressive",
        "Conservative": "Conservative",
        "Less Popular": "Less Popular",
        "More Popular": "More Popular",
        "Start": "Start",
        "Stop": "Stop",
        "Reset": "Reset",
        "Speed": "Speed",
        "Graph Title": "Average Diversity of Friend Opinions",
        "GraphDiscription": "This plot tracks how the opinions of an agent’s friends become more or less different from the agent’s own opinion, on average. Decreasing diversity indicates an echo-chamber effect.",
        "Time": "Time",
        "ParameterSetting": "Parameter Setting",
        "Scenario01Discription": "Without influence and unfriending, agents are exposed to diverse opinions but their own opinions do not change, and the underlying network structure stays the same.",
        "Scenario02Discription": "Without unfriending, the network structure remains unchanged and agents are exposed to diverse opinions. However, influence causes agents’ opinions to change based on these exposures. Depending on the initial conditions and on the tolerance, the network converges either to a homogeneous state where all (or almost all) agents have a moderate opinion, or to a state where two (or more) diverse opinions coexist.",
        "Scenario03Discription": "Without influence, opinions do not change. However, the unfriending process allows the agents to slowly sort themselves into a few homogeneous groups.",
        "Scenario04Discription": "When agents are influenced by their friends with similar opinions and can unfriend those with different opinions, the network quickly converges into two or more segregated and homogeneous echo-chambers. The number depends on the tolerance, as long as it is not too high: the smaller the tolerance, the more echo chambers.",
        "Scenario05Discription": "With high tolerance, unfriending has small effect. Influence causes the system to quickly converge to a single group with homogeneous opinions.",
        "PostMessage": "User [t_node.name] posts a new message.",
        "RepostMessage": "User [t_node.name] reposts user [repost_node.name]'s message.",
        "ReadMessage": "User [t_node.name] reads [concordant_nodes.length] messages.",
        "BecomeMoreProgressice": "User [t_node.name] becomes a bit more progressive.",
        "BecomeLessProgressice": "User [t_node.name] becomes a bit less progressive.",
        "BecomeLessConservative": "User [t_node.name] becomes a bit less conservative.",
        "BecomeMoreConservative": "User [t_node.name] becomes a bit more conservative.",
        "Unfollow": "User [t_node.name] unfollows user [del_node.name], follows user[add_node.name].",
        "TranslatersName": " "
    },
    "japanese": {
        "Language": "日本語",
        "Title": "エコーデモ",
        "Theme": "エコーチェンバーはどのようにしてソーシャルメディアから生じるのか",
        "Scenario": "シナリオ",
        "Default": "初期値",
        "AdvancedParameters": "高度なパラメータ",
        "Tolerance": "許容範囲",
        "ToleranceDiscription": "各個人は自分の意見をもっていて、それをメッセージとして投稿します。友人のメッセージが自分の許容範囲にある場合は「合うメッセージ」、そうでない場合は「合わないメッセージ」とみなします。自分に合うメッセージから個人は影響を受けます。そして、自分に合わないメッセージを投稿する友人をしばしばアンフォローします。",
        "Low": "低",
        "Medium": "中",
        "High": "高",
        "Influence": "社会的影響",
        "InfluenceDiscription": "各個人の意見は、その人に合うメッセージから影響を受けて変化し、次第に友人たちの意見に似ていきます。社会的影響のパラメータは、この変化の速さを調整します。",
        "Off": "なし",
        "Weak": "弱",
        "Strong": "強",
        "Unfriending": "アンフォローの頻度",
        "UnfriendingDiscription": "このパラメータはアンフォローの頻度を表します。自分に合わないメッセージを投稿する友人1名をアンフォローし、その後、ランダムに新しい友人を1人フォローします。",
        "Never": "なし",
        "Sometimes": "時々",
        "Often": "しばしば",
        "Progressive": "進歩的",
        "Conservative": "保守的",
        "Less Popular": "人気がない",
        "More Popular": "人気がある",
        "Start": "開始",
        "Stop": "停止",
        "Reset": "初期化",
        "Speed": "速度",
        "Graph Title": "友人の意見の平均多様性",
        "GraphDiscription": "このグラフは、友人たちの意見がどのように変化していくのかを表しています。時間と共に意見の多様性が減少するということは、エコーチェンバーの効果を示しています。",
        "Time": "時間",
        "ParameterSetting": "パラメータ設定",
        "Scenario01Discription": "社会的影響とアンフォローをなしにすると、個人はいろいろなメッセージを受け取りますが、自身の意見は変わりません。アンフォローもしないため、友人関係のネットワークも変化しません。",
        "Scenario02Discription": "アンフォローをなしにした場合、友人関係のネットワークは全く変わりませんが、個人はいろいろなメッセージを受け取ります。そして、受け取ったメッセージから社会的影響を受けて、個人の意見は徐々に変化していきます。初期状態と許容範囲の値によって、最終的には全員が中間的な1つの意見をもつネットワークか、2つ以上の違う意見が共存するネットワークのどちらかになります。",
        "Scenario03Discription": "社会的影響をなしにした場合、各個人の意見は変化しません。しかし、アンフォローを繰り返すことによって、徐々に同じ意見をもつ人からなる少数のグループをつくります。",
        "Scenario04Discription": "社会的影響とアンフォローがある場合、ネットワークは複数の同じ意見からなるエコーチェンバーに分断されます。許容範囲が大きすぎなければ、その大きさによって分断の数が決まります。許容範囲が小さいほど、多くのエコーチェンバーに分断されます。",
        "Scenario05Discription": "許容範囲が大きい場合、アンフォローはあまり影響しません。この場合、社会的影響によって、すぐに全員が同じ意見をもつようになります。",
        "PostMessage": "ユーザー[t_node.name]が新しいメッセージを投稿しました。",
        "RepostMessage": "ユーザー[t_node.name]がユーザー[repost_node.name]のメッセージを共有しました。",
        "ReadMessage": "ユーザー[t_node.name]が[concordant_nodes.length]つのメッセージを読みました。",
        "BecomeMoreProgressice": "ユーザー[t_node.name]はやや進歩的になりました。",
        "BecomeLessProgressice": "ユーザー[t_node.name]はやや進歩的ではなくなりました。",
        "BecomeLessConservative": "ユーザー[t_node.name]はやや保守的ではなくなりました。",
        "BecomeMoreConservative": "ユーザー[t_node.name]はやや保守的になりました。",
        "Unfollow": "ユーザー[t_node.name]がユーザー[del_node.name]をアンフォローし、ユーザー[add_node.name]をフォローしました。",
        "TranslatersName": "Japanese translation by Ayahito Saji and <a href='http://www.colorlessgreen.info/'>Kazutoshi Sasahara</a>"
    }
}